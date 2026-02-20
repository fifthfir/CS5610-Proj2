import "dotenv/config";
import express from "express";

import sessionRoutes from "../server/routes/session.routes.js";
import notesRoutes from "../server/routes/notes.routes.js";
import inventoryRoutes from "../server/routes/inventory.routes.js";
import craftRoutes from "../server/routes/craft.routes.js"; // WIP

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

// app.get("/api/health", (req, res) => res.json({ ok: true }));

app.use("/api/session", sessionRoutes);
app.use("/api/notes", notesRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/api/crafts", craftRoutes); // WIP

app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Trying to connect to database...");
  
  try {
    const { getDb } = await import("../server/db/mongo.js"); 
    
    const db = await getDb();
    
    if (db) {
      console.log("Success: connected!");
    }
  } catch (err) {
    console.error("connected failed:", err.message);
    
    if (err.message.includes("Cannot find module")) {
      console.log("Please check import path.");
    }
  }
});

export default app;