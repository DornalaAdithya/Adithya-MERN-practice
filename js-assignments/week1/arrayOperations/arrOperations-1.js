//Assignment 1: Daily Temperature Analyzer

const temperatures = [32, 35, 28, 40, 38, 30, 42];
//1. filter() temperatures above 35
let tempAbove35=temperatures.filter(temp => temp>35);
console.log(tempAbove35);

//2. map() to convert all temperatures from Celsius → Fahrenheit
let tempInFarh=temperatures.map(ele => (ele*(9/5))+32);
console.log(tempInFarh);

//3. reduce() to calculate average temperature
let sumTemp=temperatures.reduce((acc,val) => acc+val);
console.log(sumTemp/temperatures.length);

//4. find() first temperature above 40
let firstTemp=temperatures.find(ele => ele>=40);
console.log(firstTemp);

//5. findIndex() of temperature 28
let idx=temperatures.findIndex(ele => ele===28);
console.log(idx);