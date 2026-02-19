import { getDb } from "./_mongo.js";

export default async function handler(req, res) {
  try {
    const db = await getDb();
    const col = db.collection("notes");

    if (req.method === "GET") {
      const notes = await col.find({}).toArray();
      return res.status(200).json(notes);
    }

    if (req.method === "POST") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      const doc = { ...body, createdAt: new Date(), updatedAt: new Date() };
      const r = await col.insertOne(doc);
      return res.status(201).json({ _id: r.insertedId, ...doc });
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}