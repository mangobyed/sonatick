// Vercel serverless function: hands the Gemini key from the environment to the page on Connect.
// Set GEMINI_API_KEY in Vercel → Project → Settings → Environment Variables.
// Note: the browser talks to Gemini directly, so whoever can open the site can see this key.
// Use a restricted / test key, or put the deployment behind Vercel's password protection.
module.exports = (req, res) => {
  const key = process.env.GEMINI_API_KEY;
  res.setHeader("Cache-Control", "no-store");
  if (!key) return res.status(500).json({ error: "GEMINI_API_KEY is not set" });
  res.status(200).json({ key });
};
