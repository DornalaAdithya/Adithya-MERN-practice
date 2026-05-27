# Week 4: Advanced Backend Concepts

This folder contains assignments for the fourth week of training, delving into more complex backend architectures, securing applications, and advanced data modeling techniques.

## Detailed Topics Covered

### 1. Authentication and Security (`Backend-auth-hashing-JWT`)
This section focuses on securing the API and managing user identities.
*   **Authentication vs Authorization**: Authentication is verifying *who* a user is (e.g., login). Authorization is verifying *what* they have access to do.
*   **Password Hashing**: The process of taking a plain-text password and passing it through a hashing algorithm (like bcrypt) to generate a unique, irreversible string. This ensures that even if the database is compromised, passwords remain secure.
*   **JSON Web Tokens (JWT)**: An open standard used to share security information between two parties (client and server). Each JWT contains encoded JSON objects, including a set of claims. JWTs are cryptographically signed, ensuring that the claims cannot be altered after the token is issued. They are primarily used for stateless user sessions.

### 2. Advanced Data Modeling (`Simple-E-Com-with-Refs`)
This section explores how to handle complex relationships between different entities in a NoSQL database.
*   **Mongoose References (`ref`)**: A way to link documents from one collection to documents in another collection. For example, an `Order` document can store the `ObjectId` of the `User` who placed it, creating a reference.
*   **`populate()`**: A Mongoose method used to automatically replace the specified paths (the references) in the document with the actual document(s) from other collection(s). Instead of just seeing an ID for the User in the Order, `populate` fetches the full User document and attaches it to the query result. This is analogous to a SQL `JOIN`.

### 3. Core Architecture Concepts
These are fundamental structural concepts used in modern Node.js backend development.
*   **Middlewares**: Functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle. They can execute any code, make changes to the request and the response objects, end the request-response cycle, or call the next middleware (via `next()`). Examples include auth checks, logging, and error handling.
*   **Models**: In an MVC (Model-View-Controller) architecture, the Model represents the data structure and business logic. In Mongoose, a Model is a wrapper for the Schema that provides an interface to the database for creating, querying, updating, deleting records, etc.
*   **Controllers**: Functions that contain the core logic for handling specific route requests. They take the incoming request, interact with the Models to retrieve or modify data, and send back the appropriate response to the client.
*   **Routes**: Definitions that map HTTP requests (like GET, POST) for specific URLs to the appropriate Controller functions.

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
