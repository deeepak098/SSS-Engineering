# SSS Engineering

Next.js 14 (App Router) + Tailwind CSS 3 + Firebase

## Setup

1. `npm install`
2. Copy `.env.local.example` to `.env.local` and add your Firebase keys, admin password, and CallMeBot details.
3. `npm run dev`

## Key paths
- `/` — Home with split hero and trust badges
- `/trays` — Product grid + bulk inquiry form
- `/machinery` — Models + comparison table + quote form
- `/contact` — Two inquiry forms posting to `/api/inquiries`
- `/gallery` — Photos from factory and installations
- `/about` — Story + stats
- `/admin/login` — Auth gate
- `/admin/trays/new` and `/admin/machines/new` — Add/edit without touching code

## Firebase
- Client init: `lib/firebase.ts`
- Collections: `trays`, `machines`, `inquiries`
- Storage: used for brochure PDFs and images

## WhatsApp notification
Forms write to Firestore, then call the CallMeBot API (`process.env.CALLMEBOT_API_KEY`).

## GA4
Add `NEXT_PUBLIC_GA4_ID` to `.env.local`. The site has meta tags, sitemap, and structured data per machinery page.
