const express = require("express");
const {
  getAllTasks,
  createTasks,
  deleteTask,
  getTask,
  updateTask,
} = require("../controller/tasksController");
const router = express.Router();

router.route("/").get(getAllTasks).post(createTasks);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
