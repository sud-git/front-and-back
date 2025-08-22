import axios from "axios";
import express from "express";
import cors from "cors";

const app1 = express();
app1.use(cors());
app1.get("/api/products", async (request, response) => {
  try {
    const fdata = await axios.get("https://fakestoreapi.com/products"); // fetch API data
    const fdatta = fdata.data; // axios gives data here

    // fakestoreapi returns an array directly, so no need for .products
    response.json(fdatta); 
  } catch (error) {
    console.error("Error fetching data:", error.message);
    response.status(500).json({ error: "Failed to fetch products" });
  }
});

const PORT = 3000;

app1.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
