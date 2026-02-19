import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({ ok: false, error: "Method Not Allowed" });
    }

    const ownerId = req.query.ownerId;
    const db = await getDb();
    const progress = await db.collection("progress").findOne({ ownerId });

    return res.json({ ok: true, currentSection: progress?.currentSection || "cell_1" });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}