const request = require('supertest')
const app = require('../index')

describe('Testes Tech Talks Docker', () => {
    it('Deve retornar JSON com mensagem "Hello, Tech Talks from Docker!"', (result) => {
        const expected = {
            message: 'Hello, Tech Talks from Docker!'
        }

        request(app).get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(expected, result)
    })
})
