const express = require('express');
const { getTodos, createTodo, updateTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

//This is the Get and POST todo
router.route('/')
    .get(getTodos)
    .post(createTodo);

//This is the PUT and DELETE todo
router.route('/:id')
    .put(updateTodo)
    .delete(deleteTodo);

module.exports = router;
