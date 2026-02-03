import exp from "express";
import { UserModel } from "../models/UserModel.js";
import { hash, compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import { verifyToken } from "../middlewares/verifyToken.js";

export const userApp = exp.Router(); //mini express

//USER API ROUTES

//read user
userApp.get("/users", async (req, res) => {
  //read users from db
  let users = await UserModel.find();
  res.status(200).json({ message: "all users", payload: users });
});

//Create User
userApp.post("/users", async (req, res) => {
  let newUser = req.body;
  // console.log(newUser);
  //hash the password
  let hashedPassword = await hash(newUser.password, 12);
  newUser.password = hashedPassword;
  //replace plain passwrod with hashed password
  //create new user in db
  let newUserDoc = new UserModel(newUser);
  //save in db
  await newUserDoc.save();
  res.status(200).json({ message: "user created" });
});

//user authentication route(Login)

userApp.post("/auth", async (req, res) => {
  //get user creds obj
  let userCred = req.body;
  //check for user name
  let userOfDB = await UserModel.findOne({ username: userCred.username });
  if (userOfDB === null) {
    return res.status(404).json({ message: "user not found" });
  }
  //compare the password
  let status = await compare(userCred.password, userOfDB.password);
  if (status === false) {
    return res.status(404).json({ message: "wrong password" });
  }
  //create signed token (JWT - json web token)
  let signedToken = jwt.sign({ username: userCred.username }, "abcdef", {
    expiresIn: 30,
  });
  //save token as HTTPOnlyCookie
  res.cookie("token", signedToken, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  }); //httpOnlyCookie,safe. browser cannot read token.

  //send res
  res.status(200).json({ message: "login success!" });
});

//read user by objID
userApp.get("/users/:id", async (req, res) => {
  //get ObjID from url param
  let objId = req.params.id;
  //find user in db
  let userObj = await UserModel.findById(objId);
  //send res
  res.status(200).json({ message: "user", payload: userObj });
});

//update user
userApp.put("/users/:id", async (req, res) => {
  //get objId from url params
  let objId = req.params.id;
  //get modified User
  let modifiedUser = req.body;
  //make update
  let latestUser = await UserModel.findByIdAndUpdate(
    objId,
    { $set: { ...modifiedUser } },
    { new: true, runValidators: true },
  );
  res.status(200).json({ message: "user modified", payload: latestUser });
});

//delete user
userApp.delete("/users/:id", async (req, res) => {
  //get objId from url params
  let objId = req.params.id;
  //delete user by id
  let deletedUser = await UserModel.findByIdAndDelete(objId);
  res.status(404).json({ message: "user removed", payload: deletedUser });
});

//test route(protected route)
userApp.get("/test", verifyToken, (req, res) => {
  res.json({ message: "test route" });
});