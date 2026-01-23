//HANDS-ON 1: smart login status engine

let isLoggedIn = true;
let isProfileComplete = false;
let result;
if (isLoggedIn) {
  if (isProfileComplete) {
    result = "welcome back";
  } else {
    result = "complete your profile";
  }
} else {
  result = "please login";
}
console.log(result);