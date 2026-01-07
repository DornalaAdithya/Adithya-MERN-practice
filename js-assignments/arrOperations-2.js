//Assignment 2: Online Course Name Processor

const courses = ["javascript", "react", "node", "mongodb", "express"];

//1. filter() courses with name length > 5
let res1=courses.filter(ele => ele.length>5);
console.log(res1);

//2. map() to convert course names to uppercase
let res2=courses.map(ele => ele.toUpperCase(ele));
console.log(res2);

//3. reduce() to generate a single string:"JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let res3=courses.find(ele => ele==="react");
console.log(res3);

//4. find() the course "react"
let res4=courses.findIndex(ele => ele==="node");
console.log(res4);

//5. findIndex() of "node"
let res5=courses.reduce((acc,val) => acc+val+" | ","");
console.log(res5);