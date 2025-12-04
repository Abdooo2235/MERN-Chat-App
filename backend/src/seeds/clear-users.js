import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

// Seed user emails to delete
const seedUserEmails = [
  "emma.thompson@example.com",
  "olivia.miller@example.com",
  "sophia.davis@example.com",
  "ava.wilson@example.com",
  "isabella.brown@example.com",
  "mia.johnson@example.com",
  "charlotte.williams@example.com",
  "amelia.garcia@example.com",
];

const clearSeedUsers = async () => {
  try {
    await connectDB();

    // Delete users with seed emails
    const result = await User.deleteMany({ email: { $in: seedUserEmails } });

    console.log(`✅ Deleted ${result.deletedCount} seed users from database`);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error clearing seed users:", error);
    process.exit(1);
  }
};

// Run the script
clearSeedUsers();
