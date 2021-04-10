const express = require('express');

const router = express.Router();

// Make CRUD operations
router.get('/hi', (req, res) => {
  res.status(200).json('hey there!');
});

module.exports = router;
