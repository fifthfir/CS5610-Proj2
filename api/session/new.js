import crypto from "crypto";

function newToken() {
  return crypto.randomBytes(16).toString("hex");
}

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }
  return res.json({ ok: true, token: `save_${newToken()}` });
}