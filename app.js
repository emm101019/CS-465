const express = require('express');
const path = require('path');
const hbs = require('hbs');
require('./app_server/models/db');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'app_server', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const travelRouter = require('./app_server/routes/index');
const apiRouter = require('./app_api/routes/index');

app.use('/', travelRouter);
app.use('/api', apiRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});