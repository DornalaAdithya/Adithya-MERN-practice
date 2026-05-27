# Week 2: Advanced JavaScript, Modules, and Collections

This folder contains assignments for the second week of training, focusing on organizing code into modules, understanding memory references with copying techniques, managing dates, and utilizing advanced data collections.

## Detailed Topics Covered

### 1. JavaScript Modules (`E-ComShoppingCartSys-modules` & `ToDo-modules`)
Modules allow you to break your code into separate, smaller, and reusable files. This makes applications easier to maintain and scale.
*   **Modules**: A self-contained piece of code that encapsulates specific functionality.
*   **`export`**: A keyword used to expose variables, functions, or classes from a module so they can be used in other files.
*   **`import`**: A keyword used to bring in exported members from other modules into the current file.

### 2. Copying Types (`copyTypes`)
Understanding how JavaScript stores objects and arrays in memory is crucial to avoid unintended side-effects when modifying data.
*   **Shallow Copy**: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object. If you change a nested object in the copy, it affects the original. Examples include `Object.assign()` and the spread operator `...`.
*   **Deep Copy**: A deep copy is a copy whose properties do not share the same references as those of the source object. Changing the copy does not affect the original. A common (though limited) way to achieve this is `JSON.parse(JSON.stringify(object))`.

### 3. Date Operations (`dateOperations`)
Working with time and dates in JavaScript.
*   **`Date` Object**: JavaScript `Date` objects represent a single moment in time in a platform-independent format. `Date` objects contain a Number that represents milliseconds since 1 January 1970 UTC.
*   **Formatting and Parsing**: Methods used to convert strings into Date objects and vice-versa, allowing for human-readable date displays.

### 4. Specialized Collections (`onlineLearningPlatform-collections`)
Modern JavaScript introduced new data structures beyond standard arrays and objects.
*   **`Map`**: The `Map` object holds key-value pairs and remembers the original insertion order of the keys. Unlike standard objects, any value (both objects and primitive values) may be used as either a key or a value.
*   **`Set`**: The `Set` object lets you store unique values of any type, whether primitive values or object references. It automatically prevents duplicate entries.

## How to Run

Navigate to the specific assignment folder and use Node.js to run the main script.

```bash
node index.js
```
*(Replace `index.js` with the entry point file name of the specific assignment).*
