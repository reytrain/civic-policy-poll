import {createClient,type Client,type InValue,type ResultSet} from '@libsql/client';
function rows<T>(result:ResultSet):T[]{return result.rows.map(row=>Object.fromEntries(result.columns.map(name=>[name,row[name]])) as T);}
class Prepared{
 readonly client:Client;readonly sql:string;readonly args:InValue[];
 constructor(client:Client,sql:string,args:InValue[]=[]){this.client=client;this.sql=sql;this.args=args;}
 bind(...args:InValue[]){return new Prepared(this.client,this.sql,args);}
 async run(){const result=await this.client.execute({sql:this.sql,args:this.args});return {success:true,meta:{changes:result.rowsAffected}};}
 async first<T=Record<string,unknown>>():Promise<T|null>{const result=await this.client.execute({sql:this.sql,args:this.args});return rows<T>(result)[0]??null;}
 async all<T=Record<string,unknown>>():Promise<{results:T[]}>{return {results:rows<T>(await this.client.execute({sql:this.sql,args:this.args}))};}
}
export function createDatabase(client:Client){return {prepare(sql:string){return new Prepared(client,sql);},async batch(statements:Prepared[]){const transaction=await client.transaction('write');try{const check=await transaction.execute('PRAGMA foreign_keys');if(Number(check.rows[0]?.foreign_keys)!==1)throw new Error('Database foreign key enforcement is required.');const results=[];for(const statement of statements){if(statement.client!==client)throw new Error('Mixed database batch rejected.');const result=await transaction.execute({sql:statement.sql,args:statement.args});results.push({success:true,results:rows(result),meta:{changes:result.rowsAffected}});}await transaction.commit();return results;}catch(error){await transaction.rollback();throw error;}finally{transaction.close();}}};}
let database:ReturnType<typeof createDatabase>|undefined;
export function getDatabase(){if(database)return database;const url=process.env.TURSO_DATABASE_URL;if(!url)throw new Error('Persistent database is not configured.');if(process.env.VERCEL&&url.startsWith('file:'))throw new Error('Local SQLite files are forbidden on Vercel.');if(!url.startsWith('file:')&&!process.env.TURSO_AUTH_TOKEN)throw new Error('Database authentication is missing.');const client=createClient({url,authToken:process.env.TURSO_AUTH_TOKEN,intMode:'number',timeout:5000});database=createDatabase(client);return database;}
