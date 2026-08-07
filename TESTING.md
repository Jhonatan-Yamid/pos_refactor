# Testing guide

This project uses Vitest for unit and contract tests.

Run tests:

```bash
npm run test
```

Run in watch mode:

```bash
npm run test:watch
```

Run coverage:

```bash
npm run coverage
```

Notes:
- Tests mock `@/libs/db` to avoid hitting a real database.
- Service functions live in `src/services/` and are the primary target for unit tests.
- API contract tests live alongside routes in `src/app/api/*/route.spec.js` and mock Prisma methods.

Integration tests (SQLite)
--------------------------

You can run a small local SQLite database for integration tests. Steps:

1. Install Prisma CLI if not installed: `npm install --save-dev prisma` (already present as devDependency).
2. Create the test DB and generate client:

Unix / macOS:

```bash
export DATABASE_URL_TEST="file:./dev-test.db"
npm run prisma:generate:test
npm run prisma:push:test
```

Windows (PowerShell):

```powershell
 $env:DATABASE_URL_TEST = "file:./dev-test.db"
npm run prisma:generate:test
npm run prisma:push:test
```

3. Run integration tests (after push/generate):

```bash
npm run test:integration
```

Notes:
- The test schema is in `prisma/schema.test.prisma` and uses `DATABASE_URL_TEST` from `.env.test` if present.
- Running `prisma db push` will create `dev-test.db` in the project root.
- These commands will generate a Prisma client for the test schema; avoid running them if you rely on a different production client unless you expect regeneration.
