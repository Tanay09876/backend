import express from "express";
import cors from "cors";

const app = express();
const port = 5000;


const allowedOrigins = [
  "https://frontend-blush-ten-79.vercel.app"
 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.send("✅ Backend is running & CORS is configured correctly.");
});


app.get("/:color", (req, res) => {
  const color = req.params.color;
  res.send(`Color selected: ${color}`);
});


app.get("/men", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Wireless Mouse",
      category: "Electronics",
      price: 499,
      inStock: true,
      details: { brand: "Logitech", warranty: "1 year" },
    },
    {
      id: 2,
      name: "Gaming Keyboard",
      category: "Electronics",
      price: 1199,
      inStock: true,
      details: { brand: "Redragon", warranty: "2 years" },
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 899,
      inStock: false,
      details: { brand: "boAt", warranty: "1 year" },
    },
    {
      id: 4,
      name: "T-Shirt",
      category: "Clothing",
      price: 299,
      inStock: true,
      details: { size: "L", material: "Cotton" },
    },
    {
      id: 5,
      name: "Sneakers",
      category: "Footwear",
      price: 1999,
      inStock: true,
      details: { brand: "Nike", size: 42 },
    },
    {
      id: 6,
      name: "Wrist Watch",
      category: "Accessories",
      price: 1499,
      inStock: false,
      details: { brand: "Fossil", waterResistant: true },
    },
    {
      id: 7,
      name: "Smartphone",
      category: "Electronics",
      price: 14999,
      inStock: true,
      details: { brand: "Samsung", RAM: "6GB" },
    },
    {
      id: 8,
      name: "Backpack",
      category: "Bags",
      price: 899,
      inStock: true,
      details: { brand: "Wildcraft", capacity: "30L" },
    },
    {
      id: 9,
      name: "Laptop Stand",
      category: "Office",
      price: 599,
      inStock: true,
      details: { material: "Aluminum", adjustable: true },
    },
    {
      id: 10,
      name: "LED Monitor",
      category: "Electronics",
      price: 7499,
      inStock: false,
      details: { size: "24 inch", resolution: "1080p" },
    },
  ]);
});

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

