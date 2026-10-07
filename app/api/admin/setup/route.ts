import {readFileSync,readdirSync} from 'node:fs';
import {join} from 'node:path';
import {adminSession,config,db,body,endpoint,fail,json} from '@/lib/server';
import {applyMigrations,isSetupLocked,lockSetup} from '@/lib/migrations';
export const dynamic='force-dynamic';
export const POST=endpoint(async request=>{
 if(process.env.SCHEMA_SETUP_ENABLED!=='yes'||(process.env.VERCEL&&process.env.VERCEL_ENV!=='production'))return json({error:'Not found.'},404);
 if(request.headers.get('origin')!==config().origin)fail(403,'Invalid origin.');
 const session=await adminSession(request);if(request.headers.get('x-admin-csrf')!==session.csrf)fail(403,'Invalid session.');
 const value=await body(request);if(Object.keys(value).length!==1||value.action!=='migrate')fail(400,'Invalid action.');
 const client=db().prepare('SELECT 1').client;
 if(await isSetupLocked(client))return json({error:'Not found.'},404);
 const directory=join(process.cwd(),'drizzle');const migrations=readdirSync(directory).filter(name=>/^\d{4}_[a-z0-9_]+\.sql$/.test(name)).map(name=>({name,sql:readFileSync(join(directory,name),'utf8')}));
 if(!migrations.length)fail(503,'Migration package unavailable.');
 const result=await applyMigrations(client,migrations);
 const violations=await client.execute('PRAGMA foreign_key_check');if(violations.rows.length)fail(503,'Database integrity check failed.');
 const transaction=await client.transaction('write');try{const fk=await transaction.execute('PRAGMA foreign_keys');if(Number(fk.rows[0]?.foreign_keys)!==1)fail(503,'Transaction foreign keys are not enabled.');}finally{await transaction.rollback();transaction.close();}
 const count=await client.execute('SELECT COUNT(*) AS count FROM VoterNullifiers');
 await lockSetup(client);
 return json({ok:true,...result,acceptedResponses:Number(count.rows[0]?.count??0),foreignKeysEnabled:true});
});
