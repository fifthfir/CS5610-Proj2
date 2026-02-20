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
      const crafts = await db
        .collection("crafts")
        .find({ ownerId })
        .sort({ updatedAt: -1 })
        .limit(200)
        .toArray();

      return res.json({ ok: true, data: crafts });
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body || {};

      const { item1, item2, result, success } = body;

      if (!item1 || !item2)
        throw new Error("Missing items for crafting");

      const now = new Date();

      const doc = {
        ownerId,
        item1: item1.trim(),
        item2: item2.trim(),
        result: result ? result.trim() : "Failed Experiment",
        success: !!success,
        starred: false,
        annotation: "",
        createdAt: now,
        updatedAt: now,
      };

      const dbResult = await db.collection("crafts").insertOne(doc);

      return res.json({
        ok: true,
        data: { ...doc, _id: dbResult.insertedId },
      });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}