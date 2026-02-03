import exp from "express";
import { userApp } from "./APIs/UserApi.js";
import { productApp } from "./APIs/ProductApi.js";
import { connect } from "mongoose";
import cookieParser from "cookie-parser";

const app = exp();
const port = 4000;

//connect to db server
async function connectDB() {
  //   connect("mongodb://localhost:20017")
  //     .then(() => console.log("connected to DB"))
  //     .catch((err) => console.log("error to connect DB",err));
  try {
    await connect("mongodb://localhost:27017/anuragdb");
    console.log("---DB Connection successfull---");

    app.listen(port, () => console.log("server listening to port ", port));
  } catch (err) {
    console.log("Error in DB connection", err);
  }
}
connectDB();
app.use(exp.json()); //body parser
app.use(cookieParser());

app.use("/user-api", userApp);
app.use("/product-api", productApp);

//error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ message: "error", reason: err.message });
});
