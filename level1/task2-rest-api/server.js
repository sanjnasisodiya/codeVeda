import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to Simple RESR APIs");
});

const PORT = 5000;
//server start
app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
