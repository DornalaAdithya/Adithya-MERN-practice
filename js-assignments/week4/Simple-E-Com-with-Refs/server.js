import exp from "express";
import { connect } from "mongoose";
import { userRoute } from "./APIs/UserAPI.js";
import { productRoute } from "./APIs/ProductAPI.js";
//create httpserver
const app = exp();
const port = 5000;
//connect mongodb
async function connectDB() {
  try {
    await connect("mongodb://localhost:27017/ecom-db");
    console.log("---DB connection Successfull---");
    app.listen(port, () => console.log("server listening to port :", port));
  } catch (err) {
    console.log("error in connecting to DB ", err);
  }
}
connectDB();
//use body parser middleware
app.use(exp.json());

//forward req to specific APIs
app.use("/user-api", userRoute);
app.use("/product-api", productRoute);

//error handling middleware
app.use((err, req, res, next) => {
  res.status(200).json({ message: "error", reason: err.message });
}); 