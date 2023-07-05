const Project = require('../../models/project');

module.exports = {
    addTodo,
    update,
    deleteTodo
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

async function update(req, res) {
    const project = await Project.findOne({'todos._id': req.body.id});
    try {
        await Project.updateOne(
            { _id: project._id, 'todos._id': req.body.id}, { $set: {
                'todos.$.text': req.body.text
            }}
        )
        res.status(200).json('Successsss!');
    } catch(err) {
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteTodo(req, res) {
   console.log(req.body)
   const project = await Project.findOne({'todos._id': req.body.id});
   try {
        await project.todos.remove(req.body);
        await project.save();
        res.status(200).json(project);
   } catch (err) {
        console.log(err)
        res.status(400).json(err);
   }
}