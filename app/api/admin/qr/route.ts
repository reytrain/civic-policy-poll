import QRCode from 'qrcode';
import {endpoint,adminSession,config} from '@/lib/server';
export const dynamic='force-dynamic';
export const GET=endpoint(async r=>{await adminSession(r);const svg=await QRCode.toString(config().origin+'/',{type:'svg',errorCorrectionLevel:'M',margin:4,width:320,color:{dark:'#16263b',light:'#ffffff'}});return new Response(svg,{headers:{'Content-Type':'image/svg+xml','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'}});});
