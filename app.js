// Import the dependencies
const express = require('express');
const app = express();

// Use favicon
var path = require('path')
var favicon = require('serve-favicon')
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Pug will be used as view engine
app.set('view engine', 'pug');

// Taking care of the routes and the static files
const routes = require('./routes');
app.use('/static', express.static('public'));
app.use(routes);

// Handle 404 situations
app.use((req, res, next) => {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
});

// Handle any errors
app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status) {
        res.status(404);
        res.render('page-not-found');
    } else {
        res.status(500);
        res.render('error');
    }
    next(err);
});

// Server should listen for requests on port 3000
app.listen(3000, () => {
    console.log('Running');
});