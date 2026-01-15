/*
Employee Payroll Processor
You are building a salary processing module in a company HR app.
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. filter() employees from IT department
let empFrm_IT=employees.filter((emp) => emp.department==="IT");
console.log(empFrm_IT);

//2. map() to add: netSalary = salary + 10% bonus
let newEmployees=employees.map((emp) => {
    emp.salary+=0.1*emp.salary;
    return emp;
});
console.log(newEmployees);

//3. reduce() to calculate total salary payout
let totalSalary=employees.reduce((acc,emp) => acc+=emp.salary,0);
console.log(totalSalary);

//4. find() employee with salary 30000
let emp1=employees.find((emp) => emp.salary>30000);
console.log(emp1);

//5. findIndex() of employee "Neha"
let emp2=employees.findIndex((emp) => emp.name==="Neha");
console.log(emp2);