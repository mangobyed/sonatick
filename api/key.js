// Hands the Gemini key (GEMINI_API_KEY) to the page on Connect.
// With CLERK_SECRET_KEY set, only signed-in users get it: the page sends its Clerk session token
// and we verify it here. Without Clerk configured the app stays open (the key is then public).
const { verifyToken } = require("@clerk/backend");

module.exports = async (req, res) => {
  res.setHeader("Cache-Control", "no-store");
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(500).json({ error: "GEMINI_API_KEY is not set" });

  if (process.env.CLERK_SECRET_KEY) {
    const token = (req.headers.authorization || "").replace(/^Bearer\s+/i, "");
    if (!token) return res.status(401).json({ error: "sign in required" });
    try {
      await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });
    } catch {
      return res.status(401).json({ error: "session expired, sign in again" });
    }
  }
  res.status(200).json({ key });
};
