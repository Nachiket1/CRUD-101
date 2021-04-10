const express = require('express');
const taskController = require('../controllers/mongoTaskController');

const router = express.Router();

// Make CRUD operations
router.get('/', taskController.getTasks, (req, res) => {
  res.status(200).json(res.locals);
});

router.post('/', taskController.addTasks, (req, res) => {
  res.status(200).json(res.locals);
});

router.delete('/', taskController.deleteTasks, (req, res) => {
  res.status(200).json(res.locals);
});

module.exports = router;
