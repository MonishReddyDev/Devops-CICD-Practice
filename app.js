const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Home route
app.get('/', (req, res) => {
    res.send('Todo API is running... Means Automation is working....');
});

module.exports = app;
