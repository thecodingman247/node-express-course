const Task = require("../models/taksModel");

const getAllTasks = (req, res) => {
  res.send("all items from controller");
};

const createTasks = async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json(task);
};

const getTask = (req, res) => {
  res.send("single task");
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
