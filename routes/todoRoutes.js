const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

//This is the Get Todo and Update Todo
router.route('/')
    .get(getTodos)
    .post(createTodo);

//This is the Update Todo and Delete  todo
router.route('/:id')
    .put(updateTodo)
    .delete(deleteTodo);


module.exports = router;
