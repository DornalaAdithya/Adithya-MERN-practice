/*
Bank Transaction Analyzer
You are building a bank statement summary.
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1. filter() all credit transactions
let credited=transactions.filter((a) => a.type==="credit");
console.log(credited);

//2. map() to extract only transaction amounts
let amnts=transactions.map((a) => a.amount);
console.log(amnts);

//3. reduce() to calculate final account balance
let accBalance=transactions.reduce((acc,a) => {
    if(a.type==="credit") return acc+=a.amount;
    else return acc-=a.amount;
},0);
console.log(accBalance);

//4. find() the first debit transaction
let fdebit=transactions.find((a) => a.type==="debit");
console.log(fdebit);

//5. findIndex() of transaction with amount 10000
let tansc=transactions.findIndex((a) => a.amount===10000);
console.log(tansc);