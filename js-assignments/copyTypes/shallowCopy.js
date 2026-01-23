const user = {
  id: 101,
  name: "Ravi",
  preferences: {
    theme: "dark",
    language: "en",
  },
};

// 1. Create a shallow copy of user
let userCopy={...user};

//2. Change:
//i. name in the copied object
userCopy.name="jp";
//ii. preferences.theme in the copied object
userCopy.preferences.theme="light";
//iii .Log both original and copied objects
console.log(user);
console.log(userCopy);
//iv. Observe what changes and what doesn’t
//only copy created to top-level properties
//when inner objects of original or copyObject are modified, changes are occured in both.