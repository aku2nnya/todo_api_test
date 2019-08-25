const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./api/models/model');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect(`mongodb://localhost/todo`, {useNewUrlParser: true}, function(err) {
  if (err) console.error('DB connection error:', err);
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

routes(app);
app.listen(port);

console.log(`Listening to port: ${port}`);
