const Todo = require('../models/todoModel');

// @desc    Get all todos
// @route   GET /api/todos
exports.getTodos = async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
};

// @desc    Create new todo
// @route   POST /api/todos
exports.createTodo = async (req, res) => {
    const { title } = req.body;
    const todo = await Todo.create({ title });
    res.status(201).json(todo);
};

// @desc    Update todo
// @route   PUT /api/todos/:id
exports.updateTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    const updatedTodo = await todo.save();
    res.json(updatedTodo);
};

// @desc    Delete todo
// @route   DELETE /api/todos/:id
exports.deleteTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: 'Todo not found' });
    }

    await todo.deleteOne();
    res.json({ message: 'Todo deleted' });
};
