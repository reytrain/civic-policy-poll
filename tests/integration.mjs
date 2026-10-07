// Exercises only the loopback development server. Never point this at production.
import assert from 'node:assert/strict';import {readFileSync} from 'node:fs';import {randomBytes} from 'node:crypto';import {demographics,topics,SURVEY_VERSION} from '../lib/survey.ts';
const origin='http://127.0.0.1:5173';const secret=readFileSync('.env.local','utf8').match(/^ADMIN_SECRET_KEY=(.*)$/m)[1];let cookie='',csrf='';const fp=randomBytes(32).toString('hex');
async function request(path,body,headers={}){const r=await fetch(origin+path,{method:body===undefined?'GET':'POST',headers:{Origin:origin,'Content-Type':'application/json',cookie,'x-survey-csrf':csrf,...headers},body:body===undefined?undefined:JSON.stringify(body)});const set=r.headers.get('set-cookie');if(set){const value=set.split(';')[0];cookie=[...cookie.split('; ').filter(c=>c&&!c.startsWith(value.split('=')[0]+'=')),value].join('; ');}return r;}
assert.equal((await request('/api/admin/metrics')).status,401);assert.equal((await request('/api/admin/export')).status,401);assert.equal((await request('/api/admin/qr')).status,401);
assert.equal((await request('/api/admin/login',{password:'wrong'})).status,401);
assert.equal((await request('/api/session',{action:'begin',fingerprint:fp,version:SURVEY_VERSION,adult:true,consent:true},{Origin:'https://evil.example'})).status,403);
let r=await request('/api/session',{action:'begin',fingerprint:fp,version:SURVEY_VERSION,adult:true,consent:true});assert.equal(r.status,200);csrf=(await r.json()).csrf;
const d=Object.fromEntries(demographics.map(q=>[q.key,0])),t=Object.fromEntries(topics.map(q=>[q.key,2])),v={fingerprint:fp,version:SURVEY_VERSION,consent:true,demographics:d,topics:t};
assert.equal((await request('/api/vote',v)).status,400);assert.equal((await request('/api/session',{action:'demographics',fingerprint:fp,version:SURVEY_VERSION,demographics:d},{'x-survey-csrf':'bad'})).status,403);
assert.equal((await request('/api/session',{action:'demographics',fingerprint:fp,version:SURVEY_VERSION,demographics:d})).status,200);
assert.equal((await request('/api/vote',{...v,website:'bot'})).status,400);
await new Promise(resolve=>setTimeout(resolve,15100));
assert.equal((await request('/api/vote',{...v,demographics:{...d,demo_age:999}})).status,400);
const pair=await Promise.all([request('/api/vote',v),request('/api/vote',v)]);for(const item of pair){assert.equal(item.status,200);assert.equal((await item.json()).recorded,true);}
r=await request('/api/admin/login',{password:secret});assert.equal(r.status,200);const adminCsrf=(await r.json()).csrf;
r=await request('/api/admin/metrics');assert.equal(r.status,200);const m=await r.json();assert.ok(m.total>=1);assert.equal(m.groups.reduce((a,g)=>a+g.total,0),m.total);assert.equal((await request('/api/admin/metrics?topic=invalid')).status,400);
for(const kind of ['raw','crosstab','summary']){r=await request('/api/admin/export?kind='+kind);assert.equal(r.status,200);const text=await r.text();assert.ok(!text.includes(fp)&&!text.includes('nullifier_hash')&&!text.includes('device_hash'));assert.match(text,/survey_uuid|question_key/);}
assert.equal((await request('/api/admin/qr')).status,200);assert.equal((await request('/api/admin/logout',{}, {'x-admin-csrf':'wrong'})).status,403);assert.equal((await request('/api/admin/logout',{}, {'x-admin-csrf':adminCsrf})).status,200);assert.equal((await request('/api/admin/metrics')).status,401);
console.log('PASS: loopback integration: auth, origins, CSRF, timing, tampering, concurrent duplicate, three CSVs, QR, logout. One local test response exists; no production data touched.');
