import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { ProductModel } from "../models/ProductModel.js";
import { hash } from "bcryptjs";
import mongoose from "mongoose";
//user route
export const userRoute = exp.Router();

//create user
userRoute.post("/users", async (req, res) => {
  //get user from req body
  let newUser = req.body;

  //validate the user before hashing the password.
  //Beacause if user send a empty password(i.e empty str).Then that empty string will hashed , it will become valid.
  //so to avoid this. we are manually calling the vaildator's before hashing the password.
  await UserModel(newUser).validate();

  //hash the password
  let hashedPass = await hash(newUser.password, 12);
  //replace password
  newUser.password = hashedPass;
  //add into users
  let userDoc = new UserModel(newUser);
  await userDoc.save({ validateBeforeSave: false }); //we already validated the user .so avoid calling validators.
  res.status(201).json({ message: "user added" });
});

//req to add product to cart
userRoute.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  // console.log("hello");
  //read user,product id's from req  {uid:"",pid:""}
  // console.log(req.params.uid);
  let userId = req.params.uid;
  let productId = req.params.pid;
  // console.log(userId);
  //check user
  let user = await UserModel.findById(userId);
  if (!user) {
    return res.status(401).json({ message: "User Not Found" });
  }
  //check product
  let product = await ProductModel.findById(productId);
  if (!product) {
    return res.status(401).json({ message: "Product Not Found" });
  }
  //performing update,if user & product available
  // console.log(user.cart);

  let qt;

  //this will not work becauae we have productId in string format and userCart[i].product in - ObjectId("pid") this format
  // for (let i = 0; i < userCart.length; i++) {
  //   if (userCart[i].product === productId) {
  //     productFoundInCart = true;
  //     qt = item.quantity + 1;
  //     break;
  //   }
  // }

  //either convert both in string or in ObjectId("") -format i.e mongodb object

  //this will work - converting to string
  let isavailable = false;
  for (let item of user.cart) {
    // console.log(item.product._id);
    if (item.product._id.toString() === productId.toString()) {
      isavailable = true;
      qt = item.quantity + 1;
    }
  }

  /* 
  let isavailable = user.cart.find(
    (item) => item.product._id.toString() === productId.toString(),
  );
  */

  //also recommended. simple and easy
  //const item = user.cart.find((item) => item.product._id.equals(productId));

  //this will also work - converting into ObjectId() -> mongodb onject. some what complex
  // let isavailable = user.cart.find(
  //   (item) => item.product == new mongoose.Types.ObjectId(productId),
  // );

  if (!isavailable) {
    console.log("Product not available in cart");
    let modifiedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $push: { cart: { product: productId, quantity: 1 } } },
      { new: true, runValidators: true },
    ).populate("cart.product");
    res
      .status(200)
      .json({ message: "product added successfull", payload: modifiedUser });
  } else {
    console.log("Product available in cart");

    let modifiedUser = await UserModel.findByIdAndUpdate(
      userId,
      { $set: { cart: { product: productId, quantity: qt } } },
      { new: true, runValidators: true },
    ).populate("cart.product");
    res
      .status(200)
      .json({ message: "product added successfull", payload: modifiedUser });
  }
});

//read user by id
userRoute.get("/users/:id", async (req, res) => {
  let uid = req.params.id;
  let user = await UserModel.findById(uid).populate("cart.product"); //agregate function.
  // first findById()->fetch the userDoc,then products are fetched from the products collection using the product id's in userDoc
  if (!user) {
    return res.status(401).json({ message: "user not found" });
  }
  res.status(200).json({ message: "user found", payload: user });
});

//update the user(name,email) - only name , email will be updated.
userRoute.put("/users/:id", async (req, res) => {
  let uid = req.params.id;
  let user = await UserModel.findById(uid);
  if (!user) {
    return res.status(404).json({ message: "no user found" });
  }
  let reqBody = req.body;
  delete reqBody.password;
  let latestUser = await UserModel.findByIdAndUpdate(
    uid,
    { $set: { ...reqBody } },
    { new: true, runValidators: true },
  );
  res.status(200).json({ message: "user updated", payload: latestUser });
});

//delete the user
userRoute.delete("/users/:id", async (req, res) => {
  let uid = req.params.id;
  let deletedUser = await UserModel.findByIdAndDelete(uid);
  if (!deletedUser) {
    return res.status(404).json({ message: "no user found" });
  }
  res.status(200).json({ message: "user deleted", payload: deletedUser });
});
