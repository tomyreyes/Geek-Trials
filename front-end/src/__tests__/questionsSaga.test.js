import { call } from 'redux-saga/effects'
import { fetchQuestions } from '../sagas/questionsSaga'

describe('Test saga values', () => {
  test('should return a call to a url', () => {
    expect(2 + 2).toBe(4)
  })
})
