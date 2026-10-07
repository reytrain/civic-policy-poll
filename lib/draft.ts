import {demographics,topics,SURVEY_VERSION} from './survey.ts';
export type Draft={version:string,answers:Record<string,number>,step:number,consent:boolean,updatedAt?:number};
export function readDraft(sources:(string|null)[]):Draft|null{
 const candidates:Draft[]=[];
 for(const raw of sources){try{if(!raw)continue;const value=JSON.parse(raw);if(value.version!==SURVEY_VERSION||!value.answers||typeof value.answers!=='object')continue;const answers:Record<string,number>={};for(const q of [...demographics,...topics]){const n=value.answers[q.key];if(Number.isInteger(n)&&n>=0&&n<q.options.length)answers[q.key]=n;}candidates.push({version:SURVEY_VERSION,answers,step:Number.isInteger(value.step)&&value.step>=-1&&value.step<=28?value.step:0,consent:value.consent===true,updatedAt:typeof value.updatedAt==='number'&&Number.isFinite(value.updatedAt)?value.updatedAt:0});}catch{}}
 if(!candidates.length)return null;if(candidates[0].updatedAt===0)candidates[0].updatedAt=Number.MAX_SAFE_INTEGER;candidates.sort((a,b)=>(b.updatedAt??0)-(a.updatedAt??0));const current=candidates[0],answers={...current.answers};for(const older of candidates.slice(1))for(const [key,value] of Object.entries(older.answers))if(answers[key]===undefined)answers[key]=value;return {...current,answers};
}
export function resumeStep(d:Draft):number{const step=Math.max(0,Math.min(28,d.step));const questions=[...demographics,...topics];for(let i=0;i<step;i++)if(d.answers[questions[i].key]===undefined)return i;return step;}

// Preserve answers supplied by another tab without replacing this tab's choices.
export function mergeDraft(current:Draft,persistent:string|null):Draft{
 const previous=readDraft([persistent]);if(!previous)return current;
 const hasMissing=Object.keys(previous.answers).some(key=>current.answers[key]===undefined);
 return {...current,answers:{...previous.answers,...current.answers},step:hasMissing?Math.max(current.step,previous.step):current.step};
}
