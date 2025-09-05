const Todoitem = require("../models/Todoitem");

exports.createTodoItem = async (req, res, next) => {
  const { task, date} = req.body;
  const todoItem = new Todoitem({
    task,
    date,
    completed: false,
  });
  await todoItem.save();
  res.status(200).json(todoItem);
};

exports.getAllTodoItems = async (req, res, next) => {
  const todoItems = await Todoitem.find();
  res.status(200).json(todoItems);
}

exports.deleteTodoItem = async (req, res, next) => {
  const { id } = req.params;
  await Todoitem.findByIdAndDelete(id);
  res.status(200).json({ _id: id });
};

exports.markCompleted = async (req, res, next) => {
  const { id } = req.params;
  const todoItem = await Todoitem.findById(id);
  todoItem.completed = !todoItem.completed;
  await todoItem.save();
  res.status(200).json(todoItem);
}