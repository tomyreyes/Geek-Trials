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
})
//expecting 500 because no query is present.
