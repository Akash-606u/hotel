
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

// The MongoDB URL
//  const mongoURL = process.env.MONGODB_URL_LOCAL ; // Your database name
const mongoURL = process.env.MONGODB_URL;

// Setup MongoDB connection
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Get the default connection
const db = mongoose.connection;

// Define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB is disconnected");
});

// Export the database connection
export default db;
