# Civic Policy Poll — Vercel edition

Native Next.js 16 + React, with persistent Turso/libSQL SQLite. This independent source preserves the survey, protected dashboard, all 160 cross-tab combinations, CSV exports, QR sharing and printing. No Cloudflare binding, Sites identity, secrets or real survey data is included in this repository.

## GitHub → Vercel automatic updates

Connect this repository to your Vercel team, framework Next.js, repository root, Node 24, build `npm run build`, install `npm ci`. Set production branch to `main`. Vercel deploys pushes to main to production and other branches to previews. GitHub Actions runs tests/typecheck/build without any production credentials. These checks are not automatically a deployment gate: configure required branch/deployment checks before relying on them to block release.

## Persistent database — required before collecting responses

Connect Turso through Vercel Marketplace, or an existing hosted libSQL database. Configure `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` as private runtime variables. **Never use a file: database on Vercel:** serverless disk is not durable or shared; the application rejects it.

Use a separate database and separate secrets for previews. Do not give PR/preview deployments production database credentials. Production needs `ADMIN_SECRET_KEY` (24+ random characters), `SERVER_SALT` (32+ random characters), and exact `APP_ORIGIN` matching the final assigned public domain. Preview can use its platform-provided VERCEL_URL when APP_ORIGIN is not configured. Preview branch aliases are accepted only from platform environment variables, never request Host headers.

Apply versioned schema exactly once per database with `CONFIRM_REMOTE_MIGRATION=yes npm run db:migrate`, using the database credentials privately. Migration checksums are stored, and applied SQL must remain immutable. **Builds never migrate or seed production.** Verify PRAGMA foreign_keys=1 on the actual remote connection; writes fail closed if enforcement is missing.

`TRUSTED_IP_HEADER` defaults empty (fingerprint-only). The supported optional Vercel value is `x-forwarded-for`, only when the platform runtime is actually present; do not accept a client-provided Cloudflare header. Duplicate deterrence is best-effort and cannot verify one person per response.

## Local development

Node 24 or newer:

```powershell
npm install
node scripts/init-local.mjs
npm run db:migrate
npm run dev
```

Local settings are generated only on explicit request, never during install/CI. Open http://127.0.0.1:5173/. The researcher passkey is the ADMIN_SECRET_KEY value in ignored .env.local. Do not share it.

```powershell
npm test
npm run typecheck
npm run build
npm run seed
```

Tests use isolated databases and 25 synthetic records; mocks never enter production. Ignored .work database fixtures may be retained on Windows. Node may emit an experimental TypeScript transformation warning. `seed` writes labeled JSON only. `tests/integration.mjs` is loopback-only and writes local test records.

## Existing Sites deployment and data

The original Sites source/deployment is preserved separately. This repository does not migrate or destroy its D1 data. Before switching a QR/link, review whether any real responses exist, agree a cutover, and verify an explicit migration/import if needed. Browser identifiers are origin-specific; moving to a new domain does not preserve device-local duplicate markers. Do not silently combine databases or run two unrelated live collection URLs.

## Research

Adults worldwide, no names/accounts, 8 demographic questions then 20 policy statements. At least 20 real people must be polled for GOVT 2305. Printed Sheet A and Sheet B are separate, but paper responses are not imported. This convenience sample is not nationally representative. See REPORT_GUIDE.md. Keep raw exports private and agree a retention/deletion date with the instructor. Source is public; responses and secrets are not.
