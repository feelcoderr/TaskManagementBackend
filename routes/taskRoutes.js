const express = require("express");
const {
  createTask,
  getAllTasks,
  completeTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/tasks", createTask);
router.get("/tasks", getAllTasks);
router.patch("/tasks/:id/complete", completeTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

module.exports = router;
