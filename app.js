const express = require('express');
const todoRoutes = require('./routes/todoRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// About route
app.get('/about', (req, res) => {
    res.send('About Page - Todo App');
});


app.get('/work', (req, res) => {
    res.send('The CI/Cd pipeline is working........');
});



// Home route
app.get('/', (req, res) => {
    res.send('Todo API is running...');
});

module.exports = app;
