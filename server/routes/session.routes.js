import express from "express";
import crypto from "crypto";

const router = express.Router();

function newToken() {
  // 16 bytes -> 32 hex chars
  return crypto.randomBytes(16).toString("hex");
}

router.post("/new", (req, res) => {
  res.json({ ok: true, token: `save_${newToken()}` });
});

export default router;