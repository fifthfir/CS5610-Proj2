import express from "express";
import crypto from "crypto";
import { getDb } from "../db/mongo.js";

const router = express.Router();

function newToken() {
  // 16 bytes -> 32 hex chars
  return crypto.randomBytes(16).toString("hex");
}

router.post("/new", (req, res) => {
  res.json({ ok: true, token: `save_${newToken()}` });
});

router.post("/save-progress", async (req, res) => {
  try {
    const ownerId = req.header("X-Owner-Id");
    const { currentSection } = req.body;
    const db = await getDb();
    await db.collection("progress").updateOne(
      { ownerId },
      { $set: { currentSection, updatedAt: new Date() } },
      { upsert: true }
    );
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

router.get("/get-progress", async (req, res) => {
  try {
    const ownerId = req.query.ownerId; 
    const db = await getDb();
    const progress = await db.collection("progress").findOne({ ownerId });
    res.json({ ok: true, currentSection: progress?.currentSection || "cell_1" });
  } catch (e) {
    res.status(400).json({ ok: false, error: e.message });
  }
});

export default router;