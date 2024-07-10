# MERN Todo Application

A simple Todo application built using the MERN stack (MongoDB, Express.js, React.js, Node.js), with additional validation using Zod.

## Features

- **Create** new todo with a title and description.
- **Read** tasks with complete information.
- **Update** tasks to mark them as completed.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js, MongoDB with Mongoose
- **Validation**: Zod

## Getting Started

### Prerequisites

- Node.js installed on your local environment
- MongoDB installed locally or access to a MongoDB database

### Installation

1. **Clone the repository:**

   - git clone https://github.com/VarshaRani9/Todo_Application.git
   - cd Todo_Application

2. **Install backend dependencies**
    - cd backend
    - npm install

3. **Install frontend dependencies**
    - cd ../frontend
    - npm install

### Create a .env file in the backend directory and add the following:
   - `PORT=<port>`
   - `MONGODB_URI=<your-mongodb-uri>`

### Create a .env file in the frontend directory and add the following:
  - VITE_APP_GET_TODOS=<backend_url>/api/todos
  - VITE_APP_ADD_TODO=<backend_url>/api/todo
  - VITE_APP_COMPLETE_TODO=<backend_url>/api/completed


## Start the development servers:
### Start the backend
  - cd ../backend
  - node index.js

### Start the frontend (in a new terminal)
  - cd ../frontend
  - npm run dev

## Accessing the Application
 - navigate to http://127.0.0.1:5173/(default) to use the Todo application.
