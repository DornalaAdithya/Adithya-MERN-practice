//ASSIGNMENT 2: Student Performance Dashboard

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1.filter() students who passed (marks ≥ 40)
let res1=students.filter(ele => ele.marks>=40);
console.log(res1);

//2.map() to add a grade field
let res2=students.map(function(ele){
    if(ele.marks>=90){
        ele.grade='A';
    }else if(ele.marks>=75){
        ele.grade='B';
    }else if(ele.marks>=60){
        ele.grade='C';
    }else{
        ele.grade='D';
    }
    return ele;
});
console.log(res2);

//3.reduce() to calculate average marks
let sumMarks=students.reduce((acc,val) => acc+val.marks,0);
console.log(sumMarks/students.length);

//4.find() the student who scored 92
let findStudent=students.find(ele => ele.marks===92);
console.log(findStudent);

//5.findIndex() of student "Kiran"
let findIndx=students.findIndex(ele => ele.name==="Kiran");
console.log(findIndx);