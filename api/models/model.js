const mongoose = require('mongoose');


const TodoSchema = new mongoose.Schema ({
  task: {
    type: String,
    required: 'Enter a task to do'
  },
  data: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['Pending', 'In Process', 'Complete'],
    default: 'Pending'
  }
});


module.exports = mongoose.model('Todo', TodoSchema);
