const encoder=new TextEncoder();
export function subnet(ip:string):string{
 if(!ip||ip.includes('%')||ip.includes(',')||ip.length>64)return 'unavailable';
 if(/^\d+\.\d+\.\d+\.\d+$/.test(ip)){const p=ip.split('.').map(Number);return p.every(n=>n>=0&&n<=255)?`${p[0]}.${p[1]}.${p[2]}.0/24`:'unavailable';}
 try{const value=new URL(`http://[${ip}]/`).hostname.slice(1,-1);const [l,r]=value.split('::');let parts=l?l.split(':'):[];if(r!==undefined){const right=r?r.split(':'):[];parts=[...parts,...Array(8-parts.length-right.length).fill('0'),...right];}if(parts.length!==8)return 'unavailable';const n=parts.map(p=>parseInt(p,16));if(n.slice(0,5).every(x=>x===0)&&n[5]===65535)return `${n[6]>>8}.${n[6]&255}.${n[7]>>8}.0/24`;return parts.slice(0,4).map(p=>p.padStart(4,'0').toLowerCase()).join(':')+'::/64';}catch{return 'unavailable';}
}
async function keyFor(secret:string){return crypto.subtle.importKey('raw',encoder.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign','verify']);}
export async function hmac(key:string,domain:string,values:unknown[]):Promise<string>{const bytes=await crypto.subtle.sign('HMAC',await keyFor(key),encoder.encode(JSON.stringify([domain,...values])));return Array.from(new Uint8Array(bytes),x=>x.toString(16).padStart(2,'0')).join('');}
function base64(data:string){return btoa(data).replaceAll('+','-').replaceAll('/','_').replaceAll('=','');}
export async function signToken(key:string,domain:string,value:Record<string,unknown>):Promise<string>{const payload=base64(JSON.stringify(value));return payload+'.'+await hmac(key,domain,[payload]);}
export async function verifyToken(key:string,domain:string,token:string,now=Date.now()):Promise<Record<string,unknown>|null>{
 try{if(token.length>4096)return null;const [payload,sig,...rest]=token.split('.');if(rest.length||!payload||!sig||!/^[a-f0-9]{64}$/.test(sig))return null;const bytes=Uint8Array.from(sig.match(/../g)!,x=>parseInt(x,16));if(!await crypto.subtle.verify('HMAC',await keyFor(key),bytes,encoder.encode(JSON.stringify([domain,payload]))))return null;const value=JSON.parse(atob(payload.replaceAll('-','+').replaceAll('_','/')));return typeof value.exp==='number'&&value.exp>now?value:null;}catch{return null;}
}
export function validateTiming(start:number,now:number):boolean{return Number.isFinite(start)&&now-start>=15000&&now-start<=86400000;}
