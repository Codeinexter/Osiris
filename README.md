# Osiris — Creator-Brand Collaboration Platform

A production-grade web app for discovering creators, running campaigns, and managing brand-creator collaborations.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **State**: Zustand
- **Charts**: Recharts
- **Icons**: lucide-react
- **Forms**: react-hook-form + zod (ready to integrate)
- **Tables**: @tanstack/react-table (ready to integrate)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Demo Credentials

| Role    | Email              | Password      |
| ------- | ------------------ | ------------- |
| Creator | creator@test.com   | password123   |
| Brand   | brand@test.com     | password123   |

## Deploy on Vercel

```bash
npm run build   # verify build succeeds
npx vercel      # deploy
```

Or connect the repo to Vercel dashboard and it will auto-deploy.

## Routes

### Public
- `/` — Landing page
- `/creators` — Creator marketing page
- `/brands` — Brand marketing page
- `/c/[handle]` — Creator public profile
- `/b/[slug]` — Brand public profile

### Auth
- `/auth` — Role chooser
- `/auth/login?role=creator|brand`
- `/auth/signup?role=creator|brand`

### Onboarding
- `/onboarding/creator` — 6-step creator onboarding
- `/onboarding/brand` — 5-step brand onboarding

### Creator App (protected)
- `/app/creator` — Dashboard
- `/app/creator/profile` — Editable profile
- `/app/creator/insights` — Analytics & charts
- `/app/creator/deals` — Deals pipeline

### Brand App (protected)
- `/app/brand` — Dashboard
- `/app/brand/profile` — Editable brand profile
- `/app/brand/creators` — Discover & invite creators
- `/app/brand/campaigns` — Campaign management

## Mock APIs

All API routes return JSON and can be swapped with a real backend:

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `GET /api/me`
- `GET /api/creators` (supports `?q=`, `?niche=`, `?minFollowers=`, etc.)
- `GET /api/creators/[handle]`
- `GET /api/brands/[slug]`
- `GET /api/deals`, `POST /api/deals`
- `GET /api/campaigns`, `POST /api/campaigns`
- `POST /api/shortlist`
- `POST /api/invite`

## Replacing Mock APIs with Real Backend

1. Seed data lives in `src/data/seed.ts` — replace with DB queries
2. Route handlers in `src/app/api/**` — swap JSON responses with real DB calls
3. Auth store in `src/stores/auth.ts` — swap localStorage with JWT/session cookies
4. All components fetch from `/api/*` endpoints, so no component changes needed
