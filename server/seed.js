// server/seed.js
import { MongoClient } from "mongodb";
import "dotenv/config";

// Using YOUR exact environment variables
const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || "echoes_archive";
const collectionName = "inventory";

async function seedDatabase() {
    console.log("🚀 Booting seed script...");

    if (!uri) {
        console.error("❌ Error: No MONGODB_URI found in your .env file!");
        return;
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log(`🔌 Connected successfully to MongoDB. Using database: ${dbName}`);

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const seedData = [];
        const dummyOwnerId = "JOHNNY-COMPLETIONIST-SEED";

        console.log("Generating dummy inventory data...");
        for (let i = 1; i <= 1010; i++) {
            seedData.push({
                ownerId: dummyOwnerId,
                name: `Alien Artifact Variant #${i}`,
                source: "seed_script",
                pinned: false,
                inspected: false,
                createdAt: new Date()
            });
        }

        console.log("Inserting >1,000 records into the database...");
        const result = await collection.insertMany(seedData);

        console.log(`✅ Success! ${result.insertedCount} documents were inserted into the '${collectionName}' collection.`);

    } catch (err) {
        console.error("❌ Error seeding database:", err);
    } finally {
        await client.close();
        console.log("🔌 Database connection closed.");
    }
}

seedDatabase();