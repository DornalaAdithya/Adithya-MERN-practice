//Assignment 1: User Profile Manager

//Scenario : You are managing a logged-in user’s profile in a web application.

const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true,
};

//1. Read and print the user’s name and email
let usr_name = user.name;
let usr_email = user.email;
console.log(`user-name :${usr_name} user-email :${usr_email}`);
//2. Add a new property lastLogin: "2026-01-01"
user.lastLogin = "2026-01-01";
console.log(user);
//3. Update role from "student" to "admin"
user.role = "admin";
console.log(user);
//4. Delete the isActive property
delete user.isActive;
console.log(user);
//5. Use Object.keys() to list all remaining fields
console.log(Object.keys(user));
