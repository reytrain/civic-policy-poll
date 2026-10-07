CREATE TABLE `DemographicResponses` (
	`survey_id` text PRIMARY KEY NOT NULL,
	`demo_age` integer NOT NULL,
	`demo_gender` integer NOT NULL,
	`demo_education` integer NOT NULL,
	`demo_income` integer NOT NULL,
	`demo_ideology` integer NOT NULL,
	`demo_employment` integer NOT NULL,
	`demo_news` integer NOT NULL,
	`demo_community` integer NOT NULL,
	FOREIGN KEY (`survey_id`) REFERENCES `VoterNullifiers`(`survey_id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "valid_demo_age" CHECK("demo_age">=0 AND "demo_age"<5),
	CONSTRAINT "valid_demo_gender" CHECK("demo_gender">=0 AND "demo_gender"<3),
	CONSTRAINT "valid_demo_education" CHECK("demo_education">=0 AND "demo_education"<4),
	CONSTRAINT "valid_demo_income" CHECK("demo_income">=0 AND "demo_income"<5),
	CONSTRAINT "valid_demo_ideology" CHECK("demo_ideology">=0 AND "demo_ideology"<7),
	CONSTRAINT "valid_demo_employment" CHECK("demo_employment">=0 AND "demo_employment"<6),
	CONSTRAINT "valid_demo_news" CHECK("demo_news">=0 AND "demo_news"<5),
	CONSTRAINT "valid_demo_community" CHECK("demo_community">=0 AND "demo_community"<3)
);
--> statement-breakpoint
CREATE TABLE `RateLimits` (
	`key` text PRIMARY KEY NOT NULL,
	`count` integer NOT NULL,
	`expires_at` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `idx_rate_expiry` ON `RateLimits` (`expires_at`);--> statement-breakpoint
CREATE TABLE `SurveySessions` (
	`id` text PRIMARY KEY NOT NULL,
	`fingerprint_hash` text NOT NULL,
	`nullifier_hash` text NOT NULL,
	`created_at` integer NOT NULL,
	`expires_at` integer NOT NULL,
	`stage` integer DEFAULT 0 NOT NULL,
	`demographics_hash` text,
	`completed_at` integer,
	CONSTRAINT "session_stage" CHECK("SurveySessions"."stage" in (0,1))
);
--> statement-breakpoint
CREATE INDEX `idx_sessions_created` ON `SurveySessions` (`created_at`);--> statement-breakpoint
CREATE TABLE `TopicResponses` (
	`survey_id` text PRIMARY KEY NOT NULL,
	`q01_bailout_equity` integer NOT NULL,
	`q02_clawbacks` integer NOT NULL,
	`q03_board_oversight` integer NOT NULL,
	`q04_tax_abatements` integer NOT NULL,
	`q05_buyback_restrictions` integer NOT NULL,
	`q06_ag_subsidies` integer NOT NULL,
	`q07_monopoly_divestiture` integer NOT NULL,
	`q08_platform_neutrality` integer NOT NULL,
	`q09_pharma_consolidation` integer NOT NULL,
	`q10_revolving_door` integer NOT NULL,
	`q11_contractor_donations` integer NOT NULL,
	`q12_agency_funding` integer NOT NULL,
	`q13_nih_pricing` integer NOT NULL,
	`q14_compulsory_licensing` integer NOT NULL,
	`q15_cost_plus_audits` integer NOT NULL,
	`q16_right_to_repair` integer NOT NULL,
	`q17_noncompetes` integer NOT NULL,
	`q18_subsidy_parity` integer NOT NULL,
	`q19_public_utilities` integer NOT NULL,
	`q20_toll_monopolies` integer NOT NULL,
	FOREIGN KEY (`survey_id`) REFERENCES `VoterNullifiers`(`survey_id`) ON UPDATE no action ON DELETE cascade,
	CONSTRAINT "valid_q01_bailout_equity" CHECK("q01_bailout_equity">=0 AND "q01_bailout_equity"<5),
	CONSTRAINT "valid_q02_clawbacks" CHECK("q02_clawbacks">=0 AND "q02_clawbacks"<5),
	CONSTRAINT "valid_q03_board_oversight" CHECK("q03_board_oversight">=0 AND "q03_board_oversight"<5),
	CONSTRAINT "valid_q04_tax_abatements" CHECK("q04_tax_abatements">=0 AND "q04_tax_abatements"<5),
	CONSTRAINT "valid_q05_buyback_restrictions" CHECK("q05_buyback_restrictions">=0 AND "q05_buyback_restrictions"<5),
	CONSTRAINT "valid_q06_ag_subsidies" CHECK("q06_ag_subsidies">=0 AND "q06_ag_subsidies"<5),
	CONSTRAINT "valid_q07_monopoly_divestiture" CHECK("q07_monopoly_divestiture">=0 AND "q07_monopoly_divestiture"<5),
	CONSTRAINT "valid_q08_platform_neutrality" CHECK("q08_platform_neutrality">=0 AND "q08_platform_neutrality"<5),
	CONSTRAINT "valid_q09_pharma_consolidation" CHECK("q09_pharma_consolidation">=0 AND "q09_pharma_consolidation"<5),
	CONSTRAINT "valid_q10_revolving_door" CHECK("q10_revolving_door">=0 AND "q10_revolving_door"<5),
	CONSTRAINT "valid_q11_contractor_donations" CHECK("q11_contractor_donations">=0 AND "q11_contractor_donations"<5),
	CONSTRAINT "valid_q12_agency_funding" CHECK("q12_agency_funding">=0 AND "q12_agency_funding"<5),
	CONSTRAINT "valid_q13_nih_pricing" CHECK("q13_nih_pricing">=0 AND "q13_nih_pricing"<5),
	CONSTRAINT "valid_q14_compulsory_licensing" CHECK("q14_compulsory_licensing">=0 AND "q14_compulsory_licensing"<5),
	CONSTRAINT "valid_q15_cost_plus_audits" CHECK("q15_cost_plus_audits">=0 AND "q15_cost_plus_audits"<5),
	CONSTRAINT "valid_q16_right_to_repair" CHECK("q16_right_to_repair">=0 AND "q16_right_to_repair"<5),
	CONSTRAINT "valid_q17_noncompetes" CHECK("q17_noncompetes">=0 AND "q17_noncompetes"<5),
	CONSTRAINT "valid_q18_subsidy_parity" CHECK("q18_subsidy_parity">=0 AND "q18_subsidy_parity"<5),
	CONSTRAINT "valid_q19_public_utilities" CHECK("q19_public_utilities">=0 AND "q19_public_utilities"<5),
	CONSTRAINT "valid_q20_toll_monopolies" CHECK("q20_toll_monopolies">=0 AND "q20_toll_monopolies"<5)
);
--> statement-breakpoint
CREATE TABLE `VoterNullifiers` (
	`survey_id` text PRIMARY KEY NOT NULL,
	`session_id` text NOT NULL,
	`nullifier_hash` text NOT NULL,
	`device_hash` text NOT NULL,
	`active` integer DEFAULT 1 NOT NULL,
	`submitted_at` integer NOT NULL,
	`duration_ms` integer NOT NULL,
	`version` text NOT NULL,
	FOREIGN KEY (`session_id`) REFERENCES `SurveySessions`(`id`) ON UPDATE no action ON DELETE no action,
	CONSTRAINT "minimum_duration" CHECK("VoterNullifiers"."duration_ms">=15000)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `VoterNullifiers_session_id_unique` ON `VoterNullifiers` (`session_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `idx_active_nullifier` ON `VoterNullifiers` (`nullifier_hash`) WHERE "VoterNullifiers"."active"=1;--> statement-breakpoint
CREATE UNIQUE INDEX `idx_active_device` ON `VoterNullifiers` (`device_hash`) WHERE "VoterNullifiers"."active"=1;--> statement-breakpoint
CREATE INDEX `idx_voters_date` ON `VoterNullifiers` (`submitted_at`);