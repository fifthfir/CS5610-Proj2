import { getDb } from "./_mongo.js";

export default async function handler(req, res) {
  try {
    const db = await getDb();
    const col = db.collection("sessions");

    const owner =
      (req.query && req.query.owner) ||
      (typeof req.body === "object" && req.body?.owner) ||
      null;

    if (!owner) {
      if (req.method === "GET") {
        return res.status(200).json({ owner: null, progress: {}, flags: {}, updatedAt: null });
      }
      return res.status(400).json({ error: "Missing owner" });
    }

    if (req.method === "GET") {
      const doc = await col.findOne({ owner });
      return res.status(200).json(
        doc || { owner, progress: {}, flags: {}, updatedAt: null }
      );
    }

    if (req.method === "POST" || req.method === "PUT") {
      const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      const update = {
        $set: {
          owner,
          progress: body.progress ?? body.session ?? body.data ?? {},
          flags: body.flags ?? {},
          updatedAt: new Date(),
        },
        $setOnInsert: { createdAt: new Date() },
      };

      const r = await col.findOneAndUpdate(
        { owner },
        update,
        { upsert: true, returnDocument: "after" }
      );

      return res.status(200).json(r.value);
    }

    res.setHeader("Allow", ["GET", "POST", "PUT"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  } catch (e) {
    console.error("API /session error:", e);
    return res.status(500).json({ error: e.message });
  }
}