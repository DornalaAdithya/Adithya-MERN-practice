//HANDS-ON 2: Course Price Tag Labeler
let price = 1299;
let label;
if (price < 500) {
  label += "budget course";
} else if (price >= 500 && price <= 1000) {
  label = "standard course";
} else {
  label = "premium course";
}
console.log(label);