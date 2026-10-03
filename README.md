# Sonatick

Real-time techno / house generator on Google **Lyria RealTime** (`lyria-realtime-exp`).
Prompt faders, moments (intro → build → drop), instant drop, key, XY modulation, bar-locked timeline.

## Deploy (Vercel)

1. Import this repo in Vercel (framework preset: **Other**, no build command).
2. Project → Settings → Environment Variables → add `GEMINI_API_KEY` (from https://aistudio.google.com/apikey).
3. Deploy, open the URL, press **Connect**, then **▶**.

The key is served to the page by `api/key.js` because the browser connects to Gemini directly.
Anyone who can open the deployment can read it, so use a test/restricted key or enable Vercel password protection.

## Local

```bash
npm i -g vercel
vercel dev      # serves index.html + /api/key with your env
```

## Controls

- **Space** play/pause · **1–6** moments · **D** instant drop · **Enter** send staged changes now
- Phones: landscape only.
