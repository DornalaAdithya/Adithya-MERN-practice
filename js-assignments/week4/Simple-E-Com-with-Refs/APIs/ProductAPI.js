import exp from "express";
import { ProductModel } from "../models/ProductModel.js";
//product route
export const productRoute = exp.Router();

//route to create product
productRoute.post("/products", async (req, res) => {
  //get product from req body
  let newProduct = req.body;
  //create product documnet
  let productDoc = new ProductModel(newProduct);
  await productDoc.save();
  res.status(200).json({ message: "product added succesfull" });
});

//get all product route
productRoute.get("/products", async (req, res) => {
  let allProducts = await ProductModel.find();
  res.status(200).json({ message: "all products", payload: allProducts });
});

//get product by ID
productRoute.get("/products/id/:id", async (req, res) => {
  let pid = req.params.id;
  let product = await ProductModel.findById(pid);
  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }
  res.status(200).json({ message: "product found", payload: product });
});

//get product by brand
productRoute.get("/products/brand/:brand", async (req, res) => {
  //get brand name
  let pbrand = req.params.brand;
  //find the product with brand name
  let products = await ProductModel.find({ brand: pbrand });
  if (products.length === 0) {
    return res.status(404).json({ message: "No product not found" });
  }
  res.status(200).json({ message: "product found", payload: products });
});

//update product by id
productRoute.put("/products/id/:id", async (req, res) => {
  //get id
  let productId = req.params.id;
  //get product from body
  let modifiedProduct = req.body;
  //find and update the product
  let latestProduct = await ProductModel.findByIdAndUpdate(
    productId,
    { $set: { ...modifiedProduct } },
    { new: true, runValidators: true },
  );
  res.status(200).json({ message: "product updated", payload: latestProduct });
});

//delete product by id
productRoute.delete("/products/id/:id", async (req, res) => {
  //get product id
  let pid = req.params.id;
  //find by id and delete
  let deletedProduct = await ProductModel.findByIdAndDelete(pid);
  if (!deletedProduct) {
    return res.status(404).json({ message: "no product found with id" });
  }
  res.status(200).json({ message: "product deleted", payload: deletedProduct });
});
