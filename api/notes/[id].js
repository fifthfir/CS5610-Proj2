import { ObjectId } from "mongodb";
import { getDb } from "../_mongo.js";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const db = await getDb();
    const col = db.collection("notes");

    if (req.method === "PUT") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      await col.updateOne(
        { _id: new ObjectId(id) },
        { $set: { text: body.text, updatedAt: new Date() } }
      );
      return res.status(200).json({ data: { ok: true } });
    }

    if (req.method === "DELETE") {
      await col.deleteOne({ _id: new ObjectId(id) });
      return res.status(200).json({ data: { ok: true } });
    }

    res.setHeader("Allow", ["PUT", "DELETE"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}