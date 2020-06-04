const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

class App {
    constructor() {
        this.express = express()
        this.middlewares()
        this.routes()
        this.database()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(routes)
    }

    database() {
        const mongoURL = 'mongodb://admin:password123@tt-mongodb:27017/tech-talks-database?authSource=admin'
        const mongoOptions = { keepAlive: 1, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }
        mongoose.connect(mongoURL, mongoOptions, (err) => err ? console.log(err) : console.log('Conectado ao MongoDB...'))
        mongoose.set('useCreateIndex', true)
    }
}

module.exports = new App().express