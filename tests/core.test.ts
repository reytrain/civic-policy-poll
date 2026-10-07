import { test } from 'node:test';
import assert from 'node:assert/strict';
import { crossTab, csvCell } from '../lib/analytics.ts';
import { subnet, hmac, signToken, verifyToken, validateTiming } from '../lib/security-core.ts';
test('25 responses cross-tabulate with all groups including empty groups',()=>{
 const rows=Array.from({length:25},(_,i)=>({demo_age:i<15?0:1,q01_bailout_equity:i%5}));
 const r=crossTab(rows,'q01_bailout_equity','demo_age',['18–24','25–34','35–49','50–64','65+']);
 assert.equal(r.length,5);assert.deepEqual(r[0].counts,[3,3,3,3,3]);assert.deepEqual(r[0].percentages,[20,20,20,20,20]);assert.equal(r[1].total,10);assert.equal(r[4].total,0);assert.deepEqual(r[4].percentages,[0,0,0,0,0]);
});
test('CSV neutralizes formulas and escapes quotes/newlines',()=>{assert.equal(csvCell('=1+2'),'"\'=1+2"');assert.equal(csvCell(' x,"y"\nz'),'" x,""y""\nz"');assert.equal(csvCell('\t=cmd'),'"\'\t=cmd"');});
test('IPv4 and IPv6 canonicalize to /24 and /64',()=>{assert.equal(subnet('192.0.2.129'),'192.0.2.0/24');assert.equal(subnet('2001:db8::1234'),'2001:0db8:0000:0000::/64');assert.equal(subnet('2001:0db8:0:0:0:0:0:1234'),'2001:0db8:0000:0000::/64');assert.equal(subnet('999.1.1.1'),'unavailable');assert.equal(subnet('::ffff:192.0.2.3'),'192.0.2.0/24');});
test('HMAC is deterministic, keyed and domain separated',async()=>{const a=await hmac('a'.repeat(40),'vote',['fp','192.0.2.0/24']);assert.match(a,/^[a-f0-9]{64}$/);assert.equal(a,await hmac('a'.repeat(40),'vote',['fp','192.0.2.0/24']));assert.notEqual(a,await hmac('b'.repeat(40),'vote',['fp','192.0.2.0/24']));assert.notEqual(a,await hmac('a'.repeat(40),'rate',['fp','192.0.2.0/24']));});
test('signed sessions reject modification, wrong keys/domain, and expiry',async()=>{const t=await signToken('a'.repeat(40),'admin',{id:'test',exp:2000});assert.equal((await verifyToken('a'.repeat(40),'admin',t,1000))?.id,'test');assert.equal(await verifyToken('b'.repeat(40),'admin',t,1000),null);assert.equal(await verifyToken('a'.repeat(40),'admin',t,2001),null);assert.equal(await verifyToken('a'.repeat(40),'admin',t+'x',1000),null);assert.equal(await verifyToken('a'.repeat(40),'vote',t,1000),null);});
test('server timing requires 15 seconds and expires after a day',()=>{assert.equal(validateTiming(1000,15999),false);assert.equal(validateTiming(1000,16000),true);assert.equal(validateTiming(1000,86402000),false);});
