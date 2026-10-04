// Public client config. The Clerk publishable key is meant to be public; it lives in Vercel env
// (CLERK_PUBLISHABLE_KEY) so the code needs no edits. No key set = login disabled (open app).
module.exports = (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  // also accept the name Vercel's Clerk integration creates
  const pk = process.env.CLERK_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || null;
  res.status(200).json({ clerkPublishableKey: pk });
};
