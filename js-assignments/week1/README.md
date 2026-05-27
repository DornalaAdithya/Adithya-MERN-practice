# Week 1: JavaScript Basics and Core Operations

This folder contains the assignments and practice code for the first week of training. The focus is on fundamental JavaScript concepts and core operations necessary for building applications.

## Detailed Topics Covered

### 1. Advanced Array Operations (`arrayAdvOperations`)
This section explores higher-order array methods that iterate over arrays without traditional loops.
*   **`map()`**: A method that creates a new array populated with the results of calling a provided function on every element in the calling array. It is used for transforming data.
*   **`filter()`**: A method that creates a shallow copy of a portion of a given array, filtered down to just the elements that pass the test implemented by the provided function. It is used to conditionally extract elements.
*   **`reduce()`**: A method that executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result is a single value (e.g., summing all numbers in an array).

### 2. Basic Array Operations (`arrayOperations`)
This section covers foundational operations used to manipulate array contents.
*   **Arrays**: A data structure consisting of a collection of elements (values or variables), each identified by an array index.
*   **Push & Pop**: `push()` adds elements to the end of an array, while `pop()` removes the last element.
*   **Shift & Unshift**: `shift()` removes the first element from an array, while `unshift()` adds elements to the beginning.

### 3. Control Statements (`controlStatements`)
These are used to manage the flow of execution in a program based on specific conditions.
*   **Conditional Statements (`if`, `else`, `switch`)**: Blocks of code that execute only if a specified condition evaluates to true. `switch` evaluates an expression, matching the expression's value to a case clause.
*   **Loops (`for`, `while`)**: Statements used to repeatedly execute a block of code as long as a specified condition remains true. 

### 4. Object Operations (`objectOperations`)
Working with JavaScript objects, which are the fundamental data structures used to store keyed collections and more complex entities.
*   **Objects**: In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup, for example. A cup is an object, with properties. A cup has a color, a design, weight, a material it is made of, etc.
*   **Properties and Methods**: Properties are values associated with an object (like a variable), while methods are actions that can be performed on objects (functions stored as object properties).

### 5. Operators (`operators.js`)
JavaScript operators are symbols used to perform operations on operands (values and variables).
*   **Arithmetic Operators**: Used to perform mathematical calculations (e.g., `+`, `-`, `*`, `/`, `%`).
*   **Assignment Operators**: Used to assign values to JavaScript variables (e.g., `=`, `+=`, `-=`).
*   **Comparison & Logical Operators**: Used to determine equality or difference between variables or values (e.g., `==`, `===`, `>`, `<`), and to determine the logic between variables or values (e.g., `&&` (AND), `||` (OR), `!` (NOT)).

## How to Run

To execute any of the scripts, ensure you have Node.js installed on your system. Run a specific file using the following command in your terminal:

```bash
node filename.js
```
