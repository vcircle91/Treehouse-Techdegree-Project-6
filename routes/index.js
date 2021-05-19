const express = require('express');
const router = express.Router();
const { projectData } = require('../data.json');

router.get('/', (req, res) => {
    res.render('index', projectData);
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    res.render('project', { id });
});

module.exports = router;