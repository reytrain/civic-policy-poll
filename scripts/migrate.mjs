import {createClient} from '@libsql/client';import {readFileSync,readdirSync} from 'node:fs';import {applyMigrations} from '../lib/migrations.ts';
const url=process.env.TURSO_DATABASE_URL;if(!url)throw new Error('TURSO_DATABASE_URL is required.');
if(!url.startsWith('file:')&&process.env.CONFIRM_REMOTE_MIGRATION!=='yes')throw new Error('Remote migration requires CONFIRM_REMOTE_MIGRATION=yes. Never run this command from a deployment build.');
const client=createClient({url,authToken:process.env.TURSO_AUTH_TOKEN,intMode:'number'});
try{const migrations=readdirSync('drizzle').filter(name=>/^\d{4}_[a-z0-9_]+\.sql$/.test(name)).map(name=>({name,sql:readFileSync('drizzle/'+name,'utf8')}));const result=await applyMigrations(client,migrations);console.log(JSON.stringify(result));console.log('Migrations complete. No seed data written.');}finally{client.close();}
