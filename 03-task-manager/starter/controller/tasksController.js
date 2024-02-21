const Task = require("../models/taksModel");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({ tasks });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    return res.status(201).json({ task });
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({ task });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Record deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err });
  }
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
