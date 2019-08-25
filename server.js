const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./api/models/model');
const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const app = express();
const port = process.env.PORT || 3000;
mongoose.connect(`mongodb://localhost:${port}/todo`, {useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);

console.log(`Listening to port: ${port}`);
