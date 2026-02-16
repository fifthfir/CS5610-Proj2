import express from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../db/mongo.js";

const router = express.Router();

function ownerIdFromReq(req) {
  const ownerId = req.header("X-Owner-Id") || req.query.ownerId;
  if (!ownerId) throw new Error("Missing ownerId (X-Owner-Id header or ?ownerId=)");
  return ownerId;
}

router.get("/", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const db = await getDb();
    const notes = await db
      .collection("notes")
      .find({ ownerId })
      .sort({ updatedAt: -1 })
      .limit(200)
      .toArray();
    res.json({ ok: true, data: notes });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const { text, source = "manual" } = req.body || {};
    if (!text || typeof text !== "string") throw new Error("Missing note text");

    const now = new Date();
    const doc = { ownerId, text: text.trim(), source, createdAt: now, updatedAt: now };

    const db = await getDb();
    const result = await db.collection("notes").insertOne(doc);

    res.json({ ok: true, data: { ...doc, _id: result.insertedId } });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const { id } = req.params;
    const { text } = req.body || {};
    if (!text || typeof text !== "string") throw new Error("Missing note text");

    const db = await getDb();
    const result = await db.collection("notes").findOneAndUpdate(
      { _id: new ObjectId(id), ownerId },
      { $set: { text: text.trim(), updatedAt: new Date() } },
      { returnDocument: "after" }
    );

    const updatedDoc = result.value !== undefined ? result.value : result;
    
    if (!updatedDoc) {
      return res.status(404).json({ ok: false, error: "Note not found" });
    }
    
    res.json({ ok: true, data: updatedDoc });

  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const { id } = req.params;

    const db = await getDb();
    const result = await db.collection("notes").deleteOne({ _id: new ObjectId(id), ownerId });
    res.json({ ok: true, deletedCount: result.deletedCount });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

export default router;