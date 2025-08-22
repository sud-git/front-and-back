import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/api/products", async (req, res) => {
  try {
    const fdata = await axios.get("https://fakestoreapi.com/products");
    res.json(fdata.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
