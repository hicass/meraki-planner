const Project = require('../../models/project');

module.exports = {
    index,
    show,
    addProject,
    updateName
}

async function index(req, res) {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects)
}

async function show(req, res) {
    const project = await Project.findById(req.params.id);
    res.json(project)
}

async function addProject(req, res) {
    req.body.user = req.user._id;
    try {
        await Project.create(req.body);
    } catch (err) {
        console.log(err)
    }
}

async function updateName(req, res) {
    const project = await Project.findOne({ '_id': req.body.projectId });
    try {
        await project.update({ name: req.body.newName})
    } catch (err) {
        console.log(err)
    }
}