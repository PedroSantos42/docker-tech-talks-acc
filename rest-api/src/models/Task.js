const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    description: { type: String, require: true },
    status: {
        type: String,
        enum: ['pending', 'ongoing', 'completed']
    }
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;