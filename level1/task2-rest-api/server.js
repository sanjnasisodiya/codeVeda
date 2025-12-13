import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
const app = express();

//cors
app.use(cors());
//middleware
app.use(express.json());

//routes
app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Simple RESR APIs");
});

const PORT = 5000;
//server start
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
