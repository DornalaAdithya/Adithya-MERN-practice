//Assignment 2: Date Comparison & Validation (Beginner → Intermediate)

let enrollmentDeadline = new Date("2026-01-20");
let currDate = new Date();

enrollmentDeadline.setHours(0,0,0,0);
currDate.setHours(0,0,0,0);

// 1.Check if:
//       * Today is before deadline → "Enrollment Open"
//       * Today is after deadline → "Enrollment Closed"
if(enrollmentDeadline>currDate){
    console.log("enrollment Open\n");
}else{
    console.log("enrollment closed\n");
}

// 2. Validate user input date:
//       * Input: "2026-02-30"
//       * Detect whether the date is valid or invalid
let input="2026-02-30";

let splitedDate=input.split("-");
let year=parseInt(splitedDate[0]);
let month=parseInt(splitedDate[1]) - 1;
let day=parseInt(splitedDate[2]);

let date=new Date(year,month,day);

if(date.getFullYear === year && date.getMonth() === month && date.getDate() === day){
    console.log("Valid Date");
}else{
    console.log("Invalid Date")
}
