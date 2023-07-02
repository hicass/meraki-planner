const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['backlog', 'committedBacklog', 'inProgress', 'done'],
        default: 'backlog'
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
    vision: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    todos: [todoSchema]
}, {
    timestamps: true
});


module.exports = mongoose.model('Project', projectSchema);