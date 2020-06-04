const Task = require('../models/Task')

class TaskController {
    async create(req, res) {
        try {
            const task = await Task.create(req.body)

            return res.status(200).send(task)
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async read(req, res) {
        try {
            if (req.params.id) {
                const data = await Task.findById(req.params.id)
                    .then(doc => {
                        return !doc ? res.status(400).end() : res.status(200).json(doc)
                    })
                return data
            } else {
                const data = await Task.find()
            
                return res.status(200).send(data)
            }
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async update(req, res) {
        try {
            const data = await Task.findByIdAndUpdate(req.params.id, req.body)
                .then(doc => {
                    return !doc ? res.status(400).end() : res.status(200).json(doc)
                })
            return data
        } catch (err) {
            res.status(400).send(err)
        }
    }

    async delete(req, res) {
        // TO DO
    }
}

module.exports = new TaskController()