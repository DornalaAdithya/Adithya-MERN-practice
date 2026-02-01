import { Schema, model } from "mongoose";

//create product schema
const productSchema = new Schema({
  pid: {
    type: Number,
    required: [true, "pid is reuired"]
  },
  productName: {
    type: String,
    required: [true, "product name is required"]
  },
  price: {
    type: Number,
    required: [true, "price is required"]
  }
});

//product model
export const ProductModel = model("product", productSchema);
