import exp from "express";
//create mini - express(Seperate Route) app
export const userApp = exp.Router();

//local test data
let users = [];

//A route is a mapping between a URL and a function that handles the request and sends a response.
//Create USER API(req handlers - route)

//get req handling route(Read users)
userApp.get("/users", (req, res) => {
  //send users data in response, to client
  res.status(200).json({ message: "All Users", payload: users }); //message,payload
});

//post req handling route(Create user)
userApp.post("/users", (req, res) => {
  //get user resourse from req
  let newUser = req.body;
  //console.log("new user is",newUser);
  //insert newuser into the users
  users.push(newUser);
  //send response to client
  res.status(201).json({ message: "user created successfully" });
});

//put req handling route(Update user)
userApp.put("/users", (req, res) => {
  //get modified user from req
  let newUser = req.body;
  //find the user with id exists in array
  let uid = newUser.id;
  let isUserExists = users.findIndex((user) => uid === user.id);
  //if user not fount,sen res as "user not found"
  if (isUserExists === -1) {
    res.status(404).json({ message: "user not found" });
  } else {
    users.splice(isUserExists, 1, newUser);
    //send res as "user modified"
    res.status(200).json({ message: "user modified" });
  }
});

//get user by id
userApp.get("/users/:id", (req, res) => {
  //read id from url parameter
  let userID = Number(req.params.id); //req.params = { id : '100' }
  //read user by this id
  let user = users.find((userObj) => userObj.id === userID);
  if (user) {
    res.status(200).json({ message: "user by id", payload: user });
  } else {
    res.status(404).json({ message: "user not found" });
  }
});

//delete req handling route(Delete user)
userApp.delete("/users-id/:id", (req, res) => {
  //read id from the url
  let userID = Number(req.params.id);
  //find the userObj
  let userIndx = users.findIndex((userObj) => userObj.id === userID);
  if (userIndx === -1) {
    return res.status(404).json({ message: "user not found" });
  }
  let deletedUser = users.splice(userIndx, 1);
  return res
    .status(200)
    .json({ message: "user deleted", payload: deletedUser });
});
