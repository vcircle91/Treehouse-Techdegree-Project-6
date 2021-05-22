// Import the dependencies
const express = require('express');
const app = express();

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
    res.render('page-not-found');
});

// Handle any other errors
app.use((err, req, res, next) => {
    res.locals.error = err;
    if (err.status) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.render('error');
});

// Server should listen for requests on port 3000
app.listen(3000, () => {
    console.log('Running');
});