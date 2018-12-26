const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todos');

router.get('/', todosController.getTodos);
router.get('/:id', todosController.getTodoById)
router.post('/', todosController.createTodo)
router.delete('/:id', todosController.removeTodo)
router.put('/:id', todosController.updateTodo)

module.exports = router