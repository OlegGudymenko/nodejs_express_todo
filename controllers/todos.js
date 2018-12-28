const todosModel = require('../models/todos');

class TodosController {
  async getTodos(req, res){
    try {
      const result = await todosModel.getTodos()
      res.status(200).send({
        success: true,
        message: 'todos retrieved successfully',
        todos: result
      })
    } catch (err) {
      res.status(500).send({
        success: false,
        message: err.message
      })
    }
  }

  async getTodoById(req, res){
    const { id } = req.params
  
    try {
      const result = await todosModel.getTodoById(id);
      res.status(200).send({
        success: true,
        message: `todo with id: ${id} retrieved successfully`,
        todos: result
      })
    } catch(err) {
      res.status(400).send({
        success: false,
        message: `todo with id: ${id} not found`
      })
    }
  }

  async createTodo(req, res){
    const newTask = {
      title: req.body.title,
      description: req.body.description,
      status: 'todo',
      creatingDate: new Date(),
      author: {
        userId: 1,
        userName: 'admin'
      }
    }
  
    try {
      const result = await todosModel.createTodo(newTask)
  
      res.status(200).send({
        success: true,
        message: 'Task was created successfully',
        todo: result
      })
    } catch(err) {
      res.status(500).send({
        success: false,
        message: 'Error in creating task'
      })
    }
  }

  async removeTodo(req, res) {
    const { id } = req.params
  
    try {
      const result = await todosModel.removeTodo(id);
      if(result ){
        res.status(200).send({
          success: true,
          message: `todo with id: ${id} deleted successfully`,
          todos: result 
        })
      } else {
        res.status(400).send({
          success: false,
          message: `todo with id: ${id} not found`, 
          todos: result 
        })
      }
    } catch(err) {
      res.status(500).send({
        success: false,
        message:  `todo with id: ${id} not deleted`
      })
    }
  }

  async updateTodo (req, res){
    const { id } = req.params
  
    try {
      const result = await todosModel.updateTodo(id, req.body, {
        new: true
      });
      
      if(result){
        res.status(200).send({
          success: true,
          message: `todo with id: ${id} updated successfully`,
          todos: result 
        })
      } else {
        res.status(400).send({
          success: false,
          message: `todo with id: ${id} not found`, 
          todos: result 
        })
      }
    } catch(err) {
      res.status(500).send({
        success: false,
        message:  `todo with id: ${id} not updated`
      })
    }
  }
}

const todosController = new TodosController();

module.exports = todosController;