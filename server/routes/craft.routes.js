import express from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../db/mongo.js";

const router = express.Router();

// Helper to grab the player's unique session ID
function ownerIdFromReq(req) {
    const ownerId = req.header("X-Owner-Id") || req.query.ownerId;
    if (!ownerId) throw new Error("Missing ownerId (X-Owner-Id header or ?ownerId=)");
    return ownerId;
}

// READ: Get all crafting logs for the player
router.get("/", async (req, res) => {
    try {
        const ownerId = ownerIdFromReq(req);
        const db = await getDb();
        const crafts = await db
            .collection("crafts") // User's crafted items
            .find({ ownerId })
            .sort({ updatedAt: -1 })
            .limit(200)
            .toArray();
        res.json({ ok: true, data: crafts });
    } catch (e) {
        res.status(400).json({ ok: false, error: e.message });
    }
});

// CREATE: Save a new crafting attempt
router.post("/", async (req, res) => {
    try {
        const ownerId = ownerIdFromReq(req);
        const { item1, item2, result, success } = req.body || {};

        if (!item1 || !item2) throw new Error("Missing items for crafting");

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

        const db = await getDb();
        const dbResult = await db.collection("crafts").insertOne(doc);

        res.json({ ok: true, data: { ...doc, _id: dbResult.insertedId } });
    } catch (e) {
        res.status(400).json({ ok: false, error: e.message });
    }
});

// UPDATE: Star or annotate a past crafting attempt
router.put("/:id", async (req, res) => {
    try {
        const ownerId = ownerIdFromReq(req);
        const { id } = req.params;
        const { starred, annotation } = req.body || {};

        const patch = { updatedAt: new Date() };
        if (typeof starred === "boolean") patch.starred = starred;
        if (typeof annotation === "string") patch.annotation = annotation.trim();

        const db = await getDb();
        const result = await db.collection("crafts").findOneAndUpdate(
            { _id: new ObjectId(id), ownerId },
            { $set: patch },
            { returnDocument: "after" }
        );

        const updatedDoc = result.value !== undefined ? result.value : result;
        if (!updatedDoc) throw new Error("Crafting log not found");

        res.json({ ok: true, data: updatedDoc });
    } catch (e) {
        res.status(400).json({ ok: false, error: e.message });
    }
});

// DELETE: Remove a crafting log
router.delete("/:id", async (req, res) => {
    try {
        const ownerId = ownerIdFromReq(req);
        const { id } = req.params;

        const db = await getDb();
        const result = await db.collection("crafts").deleteOne({ _id: new ObjectId(id), ownerId });

        res.json({ ok: true, deletedCount: result.deletedCount });
    } catch (e) {
        res.status(400).json({ ok: false, error: e.message });
    }
});

export default router;