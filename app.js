// Import the dependencies
const express = require('express');
const app = express();

// Pug will be used as view engine
app.set('view engine', 'pug');

// Taking care of the routes and the static files
const routes = require('./routes');
app.use('/static', express.static('public'));
app.use(routes);

// Server should listen for requests on port 3000
app.listen(3000, () => {
    console.log('Running');
});