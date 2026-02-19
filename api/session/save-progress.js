import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST" && req.method !== "PUT") {
      res.setHeader("Allow", ["POST", "PUT"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const ownerId = body?.ownerId || body?.owner || body?.Id || body?.id;
    if (!ownerId) return res.status(400).json({ error: "Missing ownerId" });

    const progress = body?.progress ?? body?.data ?? body?.session ?? {};
    const flags = body?.flags ?? {};

    const db = await getDb();
    const col = db.collection("sessions");

    const update = {
      $set: { ownerId, progress, flags, updatedAt: new Date() },
      $setOnInsert: { createdAt: new Date() },
    };

    const r = await col.findOneAndUpdate(
      { ownerId },
      update,
      { upsert: true, returnDocument: "after" }
    );

    return res.status(200).json({ ok: true, saved: true, session: r.value });
  } catch (e) {
    console.error("save-progress error:", e);
    return res.status(500).json({ error: e.message });
  }
}