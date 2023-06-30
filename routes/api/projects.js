const express = require('express');
const router = express.Router();
const projectsCtrl = require('../../controllers/api/projects');

router.get('/', projectsCtrl.index);
router.get('/:id', projectsCtrl.show);
router.post('/new', projectsCtrl.addProject);
router.put('/name', projectsCtrl.update);

module.exports = router;