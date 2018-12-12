const request = require('supertest')
const root = require('../routes/root')

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(root)
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200)
      })
  })
})
