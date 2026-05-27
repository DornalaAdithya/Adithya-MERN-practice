# Week 3: Introduction to Backend and Databases

This folder contains assignments for the third week of training, marking the transition into building a backend server and integrating a database to persist data.

## Detailed Topics Covered

### 1. The First Backend (`1-First-Backend`)
This section covers the absolute basics of standing up a web server.
*   **Node.js**: A cross-platform, open-source JavaScript runtime environment that can run code outside a web browser, commonly used for server-side scripting.
*   **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of creating server routes and handling HTTP requests.
*   **Routing**: Determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, PUT, DELETE).

### 2. Backend with Database Integration (`Backend-With-DataBase`)
This section introduces data persistence by connecting the Node.js server to a MongoDB database.
*   **MongoDB**: A popular NoSQL, document-oriented database program. Data is stored in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.
*   **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
*   **CRUD Operations**: The four basic operations of persistent storage: **C**reate (inserting new data), **R**ead (querying existing data), **U**pdate (modifying data), and **D**elete (removing data).

### 3. MongoDB Shell Commands (`mongoDbCommands.txt`)
A reference for interacting with the database directly.
*   **Database Commands**: Commands to create, switch, or drop databases (e.g., `use database_name`).
*   **Collection Commands**: Commands to manage collections (similar to tables in SQL databases), such as `db.createCollection()`.
*   **Document Commands**: Commands to insert (`insertOne`, `insertMany`), query (`find`), update (`updateOne`), or delete (`deleteOne`) documents within a collection.

## Prerequisites

To run these backend projects, you will need:
1.  Node.js installed.
2.  MongoDB installed and running locally, or access to a MongoDB Atlas cluster.

## How to Run

For the backend applications, navigate into the project directory and install the necessary dependencies before starting the server.

```bash
cd <project-folder-name>
npm install
node server.js
```
*(Ensure you configure any required environment variables, like the MongoDB URI, if applicable).*
