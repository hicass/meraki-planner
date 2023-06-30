const Project = require('../../models/project');

module.exports = {
    index,
    show,
    addProject,
    update,
    deleteProject
}

async function index(req, res) {
    const projects = await Project.find({ user: req.user._id });
    res.json(projects)
}

async function show(req, res) {
    const project = await Project.findById(req.params.id);
    res.json(project);
}

async function addProject(req, res) {
    req.body.user = req.user._id;
    try {
        const project = await Project.create(req.body);
        res.json(project);
    } catch (err) {
        console.log(err);
    }
}

async function update(req, res) {
    const project = await Project.findOne({ '_id': req.body.id });
    try {
        await project.updateOne(req.body.attributes);
        res.status(200).json('Successsss!');
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}

async function deleteProject(req, res) {
    try {
        await Project.findOneAndDelete({ '_id': req.body.id });
        res.status(200).json('Successsss!');
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
}