//Assignment 3: Age Calculator (Intermediate)

let dob = "2000-05-15";

//1. Calculate exact age in years
let dobDate = new Date(dob);

let date = new Date();

console.log(dobDate);
console.log(date);

let ageY = date.getFullYear() - dobDate.getFullYear();

let currentMonth = date.getMonth();
let birthMonth = dobDate.getMonth();

if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDate.getDate() < dobDate.getDate())) {
    ageY--;
}

console.log("Age is:", ageY);
