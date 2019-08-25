module.exports = function(app) {
  const todoList = require('../controllers/controller');
  app.route('/tasks')
    .get(todoList.listAll)
    .post(todoList.createOne);
  app.route('/tasks/:taskId')
    .get(todoList.readOne)
    .put(todoList.updateOne)
    .delete(todoList.removeOne);
};
