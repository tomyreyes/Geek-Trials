const request = require('supertest')
const app = require('../server.js')

describe('Test trivia questions endpoint', () => {
  test('It should respond with an error', () => {
    return request(app)
      .get('/api/get-questions')
      .then(response => {
        expect(response.status).toBe(500)
      })
  })
  test('It should respond with a status 200', () => {
    return request(app)
      .get('/api//get-questions')
      .query({ categoryId: 11, difficulty: 'easy' })
      .then(response => {
        expect(response.status).toBe(200)
      })
  })
})
