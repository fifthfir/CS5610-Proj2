import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    const ownerId = req.query?.ownerId;
    if (!ownerId) return res.status(400).json({ error: "Missing ownerId" });

    const db = await getDb();
    const col = db.collection("sessions");

    const doc = await col.findOne({ ownerId });

    return res.status(200).json({
      ok: true,
      currentSection: doc?.currentSection ?? null,
    });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}