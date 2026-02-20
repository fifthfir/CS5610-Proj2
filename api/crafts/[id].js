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
      const body = typeof req.body === "string"
        ? JSON.parse(req.body)
        : req.body || {};

      const { starred, annotation } = body;

      const patch = { updatedAt: new Date() };
      if (typeof starred === "boolean") patch.starred = starred;
      if (typeof annotation === "string")
        patch.annotation = annotation.trim();

      const result = await db.collection("crafts").findOneAndUpdate(
        { _id: new ObjectId(id), ownerId },
        { $set: patch },
        { returnDocument: "after" }
      );

      const updatedDoc =
        result?.value !== undefined ? result.value : result;

      if (!updatedDoc)
        throw new Error("Crafting log not found");

      return res.json({ ok: true, data: updatedDoc });
    }

    if (req.method === "DELETE") {
      const result = await db
        .collection("crafts")
        .deleteOne({ _id: new ObjectId(id), ownerId });

      return res.json({
        ok: true,
        deletedCount: result.deletedCount,
      });
    }

    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });

  } catch (e) {
    return res.status(400).json({ ok: false, error: e.message });
  }
}