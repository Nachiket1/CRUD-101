require('dotenv').config();
const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

// Connect Mongo Database
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Assessment101',
  })
  .then(() => console.log('connected to mongoDB'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: { type: String, required: true },
});

const Task = mongoose.model('task', taskSchema);

const userSchema = new Schema({
  name: { type: String, required: true },
});

const User = mongoose.model('user', userSchema);

module.exports = {
  Task,
  User,
};
