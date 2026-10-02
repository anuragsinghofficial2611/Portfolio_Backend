const express = require('express');
const router = express.Router();
const { getProjects,createProject,updateProject } = require('../controllers/project.controller');

router.get('/getall',getProjects);
router.post('/newproject',createProject);
router.patch('/project/:id',updateProject);

module.exports = router;