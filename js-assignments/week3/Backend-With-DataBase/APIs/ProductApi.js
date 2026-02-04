import exp from "express";
import { ProductModel } from "../models/ProductModel.js";

//create mini-express
export const productApp = exp.Router();

//get products
productApp.get("/products", async (req, res) => {
  //get the products from DB
  let products = await ProductModel.find();
  res.status(200).json({ message: "all products", payload: products });
});

//add products
productApp.post("/products", async (req, res) => {
  //get product from req body
  let newProduct = req.body;
  //   console.log(newProduct);
  //add product into DB
  let newProductDoc = new ProductModel(newProduct);
  await newProductDoc.save();
  res.status(200).json({ message: "added new product" });
});

//get product by id
productApp.get("/products/:id", async (req, res) => {
  //get the id from req params
  let productId = req.params.id;
  //find the product
  let products = await ProductModel.findById(productId);
  res.status(200).json({ message: "product", payload: products });
});

//update product by id
productApp.put("/products/:id", async (req, res) => {
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

//delete product route
productApp.delete("/products/:id", async (req, res) => {
  //get objId from url params
  let objId = req.params.id;
  //delete product by id
  let deletedProduct = await ProductModel.findByIdAndDelete(objId);
  res.status(404).json({ message: "product removed", payload: deletedProduct });
});
