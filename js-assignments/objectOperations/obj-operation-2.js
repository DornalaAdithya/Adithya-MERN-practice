//Assignment 2: Exam Result Summary

//Scenario : Marks are stored subject-wise for a student.

const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

//1. Calculate total marks
let totalMarks=0;
for(let mark in marks){
    totalMarks+=marks[mark];
}
console.log(`total marks = ${totalMarks}`);
//2. Calculate average marks
console.log(`average = ${totalMarks/Object.keys(marks).length}`);
//3. Find the highest scoring subject
let high=0;
let sub="";
for(let mark in marks){
    if(marks[mark]>high){
        high=marks[mark];
        sub=mark;
    }
}
console.log(`highest marks and subject ${high} , ${sub}`);
//4. Add a new subject computer: 90
marks.computer=90;
console.log(marks);