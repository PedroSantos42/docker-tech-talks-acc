const { Router } = require('express')
const TaskController = require('../src/controllers/TaskController')

const app = Router()

app.get('/', (req, res) => {
    res.status(200).send({ message: "Hello, Tech Talks from Docker!" })
})

app.get('/task', TaskController.read)
app.get('/task/:id', TaskController.read)
app.post('/task', TaskController.create)
app.patch('/task/:id', TaskController.update)

module.exports = app