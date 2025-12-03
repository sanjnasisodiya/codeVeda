import { products } from "../data/product.js";

//get all products
export const getProducts = (req, res) => {
  res.status(200).json(products);
};

//get single product by id
export const getProductsById = (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//create product
export const createProduct = (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(400).json({ message: "Name and Price are required" });
    }

    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };
    products.push(newProduct);
    res
      .status(201)
      .json({ message: "Product created Successfully" }, newProduct);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//update product
export const updateProduct = (req, res) => {
  try {
    const id = Number(req.params.id);
    const product = products.find((p) => p.id === id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;

    res.status(200).json(product);
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//delete product
export const deleteProduct = (req, res) => {
  try {
    const id = Number(req.params.id);
    const index = products.findIndex((p) => p.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
