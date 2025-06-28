const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
const todoRoutes = require('./routes/todoRoutes');
const userRoutes = require('./routes/userRoutes'); // <-- New route for login/signup

app.use('/api/todos', todoRoutes);
app.use('/api/users', userRoutes); // <-- Added for signup/login

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});