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
    const items = await db
      .collection("inventory")
      .find({ ownerId })
      .sort({ updatedAt: -1 })
      .limit(200)
      .toArray();
    res.json({ ok: true, data: items });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const { name, source = "story" } = req.body || {};
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

    const db = await getDb();
    const result = await db.collection("inventory").insertOne(doc);
    res.json({ ok: true, data: { ...doc, _id: result.insertedId } });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const ownerId = ownerIdFromReq(req);
    const { id } = req.params;
    const { inspected, pinned, name } = req.body || {};

    const patch = { updatedAt: new Date() };
    if (typeof inspected === "boolean") patch.inspected = inspected;
    if (typeof pinned === "boolean") patch.pinned = pinned;
    if (typeof name === "string" && name.trim()) patch.name = name.trim();

    const db = await getDb();
    const result = await db.collection("inventory").findOneAndUpdate(
      { _id: new ObjectId(id), ownerId },
      { $set: patch },
      { returnDocument: "after" }
    );

    // FIX: Support both old and new MongoDB driver versions
    const updatedDoc = result.value !== undefined ? result.value : result;
    
    if (!updatedDoc) throw new Error("Item not found");
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
    const result = await db.collection("inventory").deleteOne({ _id: new ObjectId(id), ownerId });
    res.json({ ok: true, deletedCount: result.deletedCount });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

export default router;