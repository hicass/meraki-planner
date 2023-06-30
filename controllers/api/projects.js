const Project = require('../../models/project');

module.exports = {
    index,
    show,
    addProject,
    update
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
        const project = await Project.findOne({ 'name': req.body.name});
        console.log(project._id)
        res.json(project)
    } catch (err) {
        console.log(err);
    }
}

async function update(req, res) {
    const project = await Project.findOne({ '_id': req.body.id });
    try {
        await project.updateOne(req.body.attributes);
    } catch (err) {
        console.log(err);
    }
}