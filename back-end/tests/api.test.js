const api = require('../routes/api')
// const api = require('../server')
const request = require('supertest')

describe('Test trivia questions endpoint', () => {
  test('It should respond with an error', () => {
    return request(api)
      .get('/get-questions?categoryId=11&difficulty=easy')
      .query({ categoryId: 11, difficulty: 'easy' })
      .expect(404)
      .then(response => {
        expect(response.status).toBe(404)
      })
  })
})
