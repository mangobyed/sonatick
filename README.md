# Sonatick

Real-time techno / house generator on Google **Lyria RealTime** (`lyria-realtime-exp`).
Prompt faders, moments (intro → build → drop), instant drop, key, XY modulation, bar-locked timeline.

## Deploy (Vercel)

1. Import this repo in Vercel (framework preset: **Other**, no build command).
2. Project → Settings → Environment Variables → add `GEMINI_API_KEY` (from https://aistudio.google.com/apikey).
3. Deploy, open the URL, press **Connect**, then **▶**.

The key is served to the page by `api/key.js` because the browser connects to Gemini directly.

## Login (Google + email, via Clerk) — optional but recommended

With these set, the app sits behind a sign-in screen and `/api/key` only serves signed-in users
(without them the app is open and anyone can read the key):

1. Create an application at https://dashboard.clerk.com → enable **Google** and **Email** sign-in.
2. Vercel → Environment Variables → add `CLERK_PUBLISHABLE_KEY` (`pk_…`) and `CLERK_SECRET_KEY` (`sk_…`), redeploy.
3. Who's in: Clerk dashboard → **Users** (sign-up date, last active).

For a production Clerk instance, Google sign-in needs your own Google OAuth client (Clerk docs → Social connections → Google).

## Local

```bash
npm i -g vercel
vercel dev      # serves index.html + /api/key with your env
```

## Controls

- **Space** play/pause · **1–6** moments · **D** instant drop · **Enter** send staged changes now
- Phones: landscape only.
