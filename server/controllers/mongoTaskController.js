const db = require('../models/mongo');

const taskController = {
  // get all tasks
  getTasks(req, res, next) {
    db.Task.find({})
      .then((data) => {
        res.locals = data;
        next();
      })
      .catch((err) =>
        next({
          log: err,
          message: { err: 'getTasks failed.' },
        })
      );
  },

  addTasks(req, res, next) {
    const { body } = req;
    db.Task.create(body)
      .then((data) => {
        res.locals = data;
        next();
      })
      .catch((err) =>
        next({
          log: err,
          message: { err: 'addTasks failed.' },
        })
      );
  },

  deleteTasks(req, res, next) {
    const { body } = req;
    db.Task.findByIdAndRemove(body)
      .then(() => next())
      .catch((err) => next(err));
  },
};

module.exports = taskController;
