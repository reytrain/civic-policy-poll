import {sql} from "drizzle-orm";
import {sqliteTable,text,integer,index,uniqueIndex,check} from "drizzle-orm/sqlite-core";
import {demographics,topics} from "../lib/survey";
export const sessions=sqliteTable("SurveySessions",{
 id:text("id").primaryKey(),fingerprintHash:text("fingerprint_hash").notNull(),nullifierHash:text("nullifier_hash").notNull(),createdAt:integer("created_at").notNull(),expiresAt:integer("expires_at").notNull(),stage:integer("stage").notNull().default(0),demographicsHash:text("demographics_hash"),completedAt:integer("completed_at"),
},t=>[index("idx_sessions_created").on(t.createdAt),check("session_stage",sql`${t.stage} in (0,1)`)]);
export const voters=sqliteTable("VoterNullifiers",{
 surveyId:text("survey_id").primaryKey(),sessionId:text("session_id").notNull().unique().references(()=>sessions.id),nullifierHash:text("nullifier_hash").notNull(),deviceHash:text("device_hash").notNull(),active:integer("active").notNull().default(1),submittedAt:integer("submitted_at").notNull(),durationMs:integer("duration_ms").notNull(),version:text("version").notNull(),
},t=>[uniqueIndex("idx_active_nullifier").on(t.nullifierHash).where(sql`${t.active}=1`),uniqueIndex("idx_active_device").on(t.deviceHash).where(sql`${t.active}=1`),index("idx_voters_date").on(t.submittedAt),check("minimum_duration",sql`${t.durationMs}>=15000`)]);
export const demographicResponses=sqliteTable("DemographicResponses",{
 surveyId:text("survey_id").primaryKey().references(()=>voters.surveyId,{onDelete:"cascade"}),...Object.fromEntries(demographics.map(q=>[q.key,integer(q.key).notNull()])),
},()=>demographics.map(q=>check("valid_"+q.key,sql`${sql.identifier(q.key)}>=0 AND ${sql.identifier(q.key)}<${sql.raw(String(q.options.length))}`)));
export const topicResponses=sqliteTable("TopicResponses",{
 surveyId:text("survey_id").primaryKey().references(()=>voters.surveyId,{onDelete:"cascade"}),...Object.fromEntries(topics.map(q=>[q.key,integer(q.key).notNull()])),
},()=>topics.map(q=>check("valid_"+q.key,sql`${sql.identifier(q.key)}>=0 AND ${sql.identifier(q.key)}<5`)));
export const rates=sqliteTable("RateLimits",{key:text("key").primaryKey(),count:integer("count").notNull(),expiresAt:integer("expires_at").notNull()},t=>[index("idx_rate_expiry").on(t.expiresAt)]);

