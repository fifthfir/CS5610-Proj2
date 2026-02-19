import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST" && req.method !== "PUT") {
      res.setHeader("Allow", ["POST", "PUT"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const ownerId =
      body?.ownerId ||
      req.headers["x-owner-id"] || null;

    if (!ownerId) return res.status(400).json({ error: "Missing ownerId" });

    const currentSection = body?.currentSection ?? null;

    const db = await getDb();
    const col = db.collection("sessions");

    await col.updateOne(
      { ownerId },
      {
        $set: { ownerId, currentSection, updatedAt: new Date() },
        $setOnInsert: { createdAt: new Date() },
      },
      { upsert: true }
    );

    return res.status(200).json({ ok: true, data: { ownerId, currentSection } });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}