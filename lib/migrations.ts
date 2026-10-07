import type {Client} from '@libsql/client';
import {createHash} from 'node:crypto';
export async function isSetupLocked(client:Client):Promise<boolean>{const table=await client.execute("SELECT name FROM sqlite_master WHERE type='table' AND name='_AppMigrations'");if(!table.rows.length)return false;const row=await client.execute("SELECT name FROM _AppMigrations WHERE name='__setup_locked__'");return row.rows.length>0;}
export async function lockSetup(client:Client):Promise<void>{await client.execute({sql:"INSERT OR IGNORE INTO _AppMigrations(name,sha256,applied_at) VALUES ('__setup_locked__','',?)",args:[Date.now()]});}
export async function applyMigrations(client:Client,migrations:{name:string,sql:string}[]):Promise<{applied:string[],checked:number}>{
 const fk=await client.execute('PRAGMA foreign_keys');if(Number(fk.rows[0]?.foreign_keys)!==1)throw new Error('Database foreign key enforcement is required.');
 await client.execute('CREATE TABLE IF NOT EXISTS _AppMigrations (name TEXT PRIMARY KEY,sha256 TEXT NOT NULL,applied_at INTEGER NOT NULL)');
 const applied:string[]=[];
 for(const m of [...migrations].sort((a,b)=>a.name.localeCompare(b.name))){if(!/^\d{4}_[a-z0-9_]+\.sql$/.test(m.name))throw new Error('Invalid migration name.');const hash=createHash('sha256').update(m.sql).digest('hex'),normalizedHash=createHash('sha256').update(m.sql.replaceAll('\r\n','\n')).digest('hex');const old=await client.execute({sql:'SELECT sha256 FROM _AppMigrations WHERE name=?',args:[m.name]});if(old.rows.length){if(old.rows[0].sha256!==hash&&old.rows[0].sha256!==normalizedHash)throw new Error('Applied migration changed: '+m.name);continue;}const statements=m.sql.split('--> statement-breakpoint').map(s=>s.trim()).filter(Boolean);if(!statements.length)throw new Error('Empty migration rejected.');await client.batch([...statements,{sql:'INSERT INTO _AppMigrations VALUES (?,?,?)',args:[m.name,normalizedHash,Date.now()]}],'write');applied.push(m.name);}
 return {applied,checked:migrations.length};
}
