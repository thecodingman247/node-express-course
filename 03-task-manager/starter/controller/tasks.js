const getAllTasks = (req, res) => {
  res.send("all items from controller");
};

const createTasks = (req, res) => {
  res.send("Create task");
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
