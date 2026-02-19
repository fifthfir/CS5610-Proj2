import { getDb } from "./_mongo.js";

function ownerIdFromReq(req) {
  const ownerId = req.headers["x-owner-id"] || req.query.ownerId;
  if (!ownerId) throw new Error("Missing ownerId (X-Owner-Id header or ?ownerId=)");
  return ownerId;
}

export default async function handler(req, res) {
  try {
    const ownerId = ownerIdFromReq(req);
    const db = await getDb();

    if (req.method === "GET") {
      const items = await db
        .collection("inventory")
        .find({ ownerId })
        .sort({ updatedAt: -1 })
        .limit(200)
        .toArray();
      return res.json({ ok: true, data: items });
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
      const { name, source = "story" } = body;
      if (!name || typeof name !== "string") throw new Error("Missing item name");

      const now = new Date();
      const doc = {
        ownerId,
        name: name.trim(),
        source,
        inspected: false,
        pinned: false,
        createdAt: now,
        updatedAt: now,
      };

      const result = await db.collection("inventory").insertOne(doc);
      return res.json({ ok: true, data: { ...doc, _id: result.insertedId } });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}