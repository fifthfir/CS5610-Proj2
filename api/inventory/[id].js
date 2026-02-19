import { ObjectId } from "mongodb";
import { getDb } from "../_mongo.js";

function ownerIdFromReq(req) {
  const ownerId = req.headers["x-owner-id"] || req.query.ownerId;
  if (!ownerId) throw new Error("Missing ownerId (X-Owner-Id header or ?ownerId=)");
  return ownerId;
}

export default async function handler(req, res) {
  try {
    const ownerId = ownerIdFromReq(req);
    const { id } = req.query;
    const db = await getDb();

    if (req.method === "PUT") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
      const { inspected, pinned, name } = body;

      const patch = { updatedAt: new Date() };
      if (typeof inspected === "boolean") patch.inspected = inspected;
      if (typeof pinned === "boolean") patch.pinned = pinned;
      if (typeof name === "string" && name.trim()) patch.name = name.trim();

      const result = await db.collection("inventory").findOneAndUpdate(
        { _id: new ObjectId(id), ownerId },
        { $set: patch },
        { returnDocument: "after" }
      );

      const updatedDoc = result?.value !== undefined ? result.value : result;
      if (!updatedDoc) throw new Error("Item not found");

      return res.json({ ok: true, data: updatedDoc });
    }

    if (req.method === "DELETE") {
      const r = await db.collection("inventory").deleteOne({ _id: new ObjectId(id), ownerId });
      return res.json({ ok: true, deletedCount: r.deletedCount });
    }

    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}