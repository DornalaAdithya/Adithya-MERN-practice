# Week 4: Advanced Backend Concepts

This folder contains assignments for the fourth week of training, delving into more complex backend architectures, security, and advanced data modeling.

## Topics Covered

*   **Backend-auth-hashing-JWT**: Implementation of robust user authentication. This includes securely hashing user passwords before storing them in the database and utilizing JSON Web Tokens (JWT) for managing user sessions and securing API endpoints.
*   **Simple-E-Com-with-Refs**: Building a more advanced E-commerce backend using Mongoose references (`ref`) and the `populate` method. This demonstrates how to model relationships between different data entities (e.g., Users, Products, and Orders) within a NoSQL database.

## Prerequisites

To run these projects, you must have:
1.  Node.js installed.
2.  MongoDB installed and running.
3.  Any required `.env` files set up with secrets like your JWT Secret and MongoDB URI.

## How to Run

Navigate into the specific project directory, install dependencies, and start the development server.

```bash
cd <project-folder-name>
npm install
npm start
```
*(Or use `node server.js` depending on the setup in the `package.json` file).*
