const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    text: {
        type: String,
        required: true
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
    todosStatus: {
        type: Array,
        default: [
            {
                title: 'Back Log',
                todos: [todoSchema]
            },

            {
                title: 'Committed Back Log',
                todos: [todoSchema]
                
            },
            {
                title: 'In Progress',
                todos: [todoSchema]
            
            },
            {
                title: 'Done',
                todos: [todoSchema]
            
            } 
        ]
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Project', projectSchema);