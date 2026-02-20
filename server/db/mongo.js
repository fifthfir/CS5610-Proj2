import { MongoClient } from "mongodb";

let client;
let db;

export async function getDb() {
  console.log("Current URI:", process.env.MONGODB_URI);
  if (db) return db;

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.MONGODB_DB || "echoes_archive";

  if (!uri) {
    console.error("Error: No MONGODB_URI! Please check .env");
    throw new Error("Missing MONGODB_URI");
  }

  try {
    client = new MongoClient(uri);
    await client.connect();

    console.log(`Success: MongoDB connected. Now using database: ${dbName}`);

    db = client.db(dbName);

    await db.collection("notes").createIndex({ ownerId: 1, updatedAt: -1 });
    await db.collection("inventory").createIndex({ ownerId: 1, updatedAt: -1 });

    return db;
  } catch (err) {
    console.error("Failed: MongoDB connected failed. Reason:", err.message);
    throw err;
  }
}