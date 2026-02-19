import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ ok: false, error: "Method Not Allowed" });
    }

    const ownerId = req.headers["x-owner-id"];
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const { currentSection } = body;

    const db = await getDb();
    await db.collection("progress").updateOne(
      { ownerId },
      { $set: { currentSection, updatedAt: new Date() } },
      { upsert: true }
    );

    return res.json({ ok: true });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}