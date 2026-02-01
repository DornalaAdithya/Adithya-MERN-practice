//create HTTP server
//import express module
import exp from "express";
//import api's
import { userApp } from "./APIs/UserApi.js";
import { productApp } from "./APIs/ProductApi.js";
//create server
const app = exp();

//Assing port number
app.listen(3000, () => console.log("HTTP Server Listening in port 3000"));

/*
USER API:
    GET     https://127.0.0.1/users
    POST    https://127.0.0.1/users
    PUT     https://127.0.0.1/users/<id>
    DELETE  https://127.0.0.1/users/<id>
*/

//get -client is asking for the resource
//post -client is asking to create resourse by sending the resource
//put -update
//delete -delete

//Body Parsing middleware
app.use(exp.json());

//forward request to userApp when path starts with '/user-api'
app.use("/user-api", userApp);
app.use("/product-api", productApp);

/*
//Create a Custom MiddleWare
function middleware1(req, res, next) {
  console.log("middleware1 executed");
  //send response
  //res.json({message:"response from middleWare"});

  //forward req to next middleware
  next();
}

function middleware2(req, res, next) {
  console.log("middleware2 executed");
  //send response
  //res.json({message:"response from middleWare"});

  //forward req to next middleware
  next();
}

//to exectue for every incoming req
app.use(middleware1);
app.use(middleware2);
*/

/*
//Create a Custom MiddleWare
function middleware1(req, res, next) {
  console.log("middleware1 executed");
  //send response
  //res.json({message:"response from middleWare"});

  //forward req to next middleware
  next();
}

function middleware2(req, res, next) {
  console.log("middleware2 executed");
  //send response
  //res.json({message:"response from middleWare"});

  //forward req to next middleware
  next();
}

//to exectue for every incoming req
app.use(middleware1);

//used for specific method
app.post("/users",middleware2 ,(req, res) => {
  //get user resourse from req
  let newUser = req.body;
  //console.log("new user is",newUser);
  //insert newuser into the users
  users.push(newUser);
  //send response to client
  res.status(201).json({ message: "user created successfully" });
});
*/
