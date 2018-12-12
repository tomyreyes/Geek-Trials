const api = require('../routes/api')
const request = require('supertest')

describe('Test trivia questions endpoint', () => {
  test('It should respond with an error', () => {
    return request(api)
      .get('/get-questions')
      .then(response => {
        expect(response.status).toBe(500)
      })
  })
  test('It should respond with a status 200', () => {
    return request(api)
      .get('/get-questions')
      .query({ categoryId: 11, difficulty: 'easy' })
      .then(response => {
        expect(response.status).toBe(200)
      })
  })
})
