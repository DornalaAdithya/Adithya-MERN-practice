import { Schema, model } from "mongoose";

//create product schema
const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "product name required"],
    },
    price: {
      type: Number,
      required: [true, "product price required"],
    },
    brand: {
      type: String,
      required: [true, "brand name required"],
    },
  },
  {
    strict: "throw",
    timestamps: true,
    versionKey: false,
  },
);

//product model
export const ProductModel = model("product", productSchema);  //name of model , schema of product
 