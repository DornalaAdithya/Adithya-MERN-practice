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

//get product route
productRoute.get("/products", async (req, res) => {
  let allProducts = await ProductModel.find();
  res.status(200).json({ message: "all products", payload: allProducts });
}); 
