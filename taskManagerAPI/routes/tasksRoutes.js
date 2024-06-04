const express = require("express");
const tasksController = require("../controllers/tasksController.js")

const router = express.Router();


router.route("/")
.get(tasksController.getAllTasks)
.post(tasksController.createTask);

router.route("/:id")
.get(tasksController.getTask)
.delete(tasksController.deleteTask)
.patch(tasksController.updateTask);

module.exports = router;