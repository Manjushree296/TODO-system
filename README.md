This is a simple ToDo List application built using the MERN stack — MongoDB, Express, React, and Node.js.

📌 Features
Add new tasks

View all tasks

Edit existing tasks

Delete tasks

Responsive frontend

Connects to MongoDB database

🛠 Tech Stack
Frontend: React, Axios, CSS

Backend: Node.js, Express.js, MongoDB (Mongoose)

▶️ How to Run
1. Clone the Repository
git clone https://github.com/your-username/todo-mern-app.git
cd todo-mern-app
2. Setup Backend
cd backend
npm install
Create a .env file and add:
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/tododb
Start the server:
node server.js
3. Setup Frontend
cd ../frontend
npm install
npm start
Frontend runs at: http://localhost:3000
Backend runs at: http://localhost:5000

🧪 API Routes
GET /api/tasks – get all tasks

POST /api/tasks – add a new task

PUT /api/tasks/:id – update a task

DELETE /api/tasks/:id – delete a task


