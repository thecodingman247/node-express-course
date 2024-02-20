const mongoose = require("mongoose");

const TaskScehma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mendatory"],
    trim: true,
    maxlength: [20, "Name can't be more than 20 character"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = new mongoose.model("Task", TaskScehma);

module.exports = Task;
