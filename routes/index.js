const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');



router.get('/', (req, res) => {
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const projectDetail = projects[id];
    if(isNaN(id) || !projectDetail) {
        res.render('page-not-found');
    } else {
        res.render('project', { id, projectDetail });
    }
});

module.exports = router;