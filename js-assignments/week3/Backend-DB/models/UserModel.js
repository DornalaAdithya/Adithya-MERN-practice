import { Schema, model } from "mongoose";
//Create User Schema (username,pass,age) (use Lower Cammel case for model)
const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "UserName is Required"],
    minLength: [4, "Minimum length should be 4"],
    maxLength: [6, "Max length exceeded"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  age: {
    type: Number,
    required: [true, "age is required"],
    min: [18, "Age should be above 18"],
    max: [25, "Age should be less than 25"],
  },
});

//Create User Model with that Schema (use Upper Cammel case for model)
export const UserModel = model("user", userSchema);
