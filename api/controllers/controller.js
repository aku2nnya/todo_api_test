const mongoose = require('mongoose');


const Todo = mongoose.model('Todo');

exports.listAll = function(req, res) {
  Todo.find({}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.createOne = function(req, res) {
  const newTask = new Todo(req.body);
  newTask.save(function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.readOne = function(req, res) {
  Todo.findById(req.params.taskId, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.updateOne = function(req, res) {
  Todo.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.removeOne = function(req, res) {
  Todo.remove({_id: req.params.taskId}, function(err, task) {
    if (err) res.send(err);
    res.json({message: 'Task deleted!'});
  });
};
