const Project = require('../../models/project');

module.exports = {
    addTodo
}

async function addTodo(req, res) {
    const project = await Project.findOne({'_id': req.body.projectId});
    project.todos.push(req.body.newTodo);
    try {
        await project.save();
        res.json(project.todos)
    } catch (err) {
        console.log(err)
    }
}