import { MongoClient } from "mongodb";

let cached = global._mongo;
if (!cached) cached = global._mongo = { conn: null, promise: null };

export async function getDb() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("Missing env: MONGODB_URI");

    const client = new MongoClient(uri);
    cached.promise = client.connect().then((c) => c.db(process.env.MONGODB_DB || "p2"));
  }

  cached.conn = await cached.promise;
  return cached.conn;
}