const { Router } = require('express')

const app = Router()

app.get('/', (req, res) => {
    res.send('<h1> Hello, Tech Talks from Docker!!!<h1>')
})

module.exports = app