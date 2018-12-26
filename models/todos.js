const db = require('../db');

db.connection.on('error', console.error.bind(console, 'connection error:'));
db.connection.once('open', function() {
  console.log('connected to db success')
});

const todosSchema = new db.Schema({
  title: String,
  description: String,
  status: String,
  creatingDate: String,
  updatingDate: String,
  author: {
    userId: Number,
    userName: String,
  }
});


class Todos {
  constructor(){
    this.model = db.model('todos', todosSchema);
  }

  getTodos(){
   return this.model.find()
  }

  getTodoById(id){
    return this.model.findById(id)
  }

  createTodo(newTask){
    return this.model.create(newTask)
  }

  updateTodo(id, data, options) {
    return this.model.findByIdAndUpdate(id, { ...data }, options)
  }

  removeTodo(id) {
    return this.model.findByIdAndDelete(id)
  }
}

const todos = new Todos();

module.exports = todos;