import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a Mongoose schema and model
const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  type: String,
});

const PortfolioItem = mongoose.model("PortfolioItem", portfolioSchema);

// API endpoint to fetch all portfolio items
app.get("/api/portfolio", async (req, res) => {
  try {
    const items = await PortfolioItem.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolio items" });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});