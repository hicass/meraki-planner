const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Backlog', 'Committed Backlog', 'In Progress', 'Complete'],
        default: 'Backlog'
    }
}, {
    timestamps: true
});

const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mission: {
        type: String,
        required: true
    },
    vission: {
        type: String,
        required: true
    },
    todos: [todoSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Project', projectSchema);