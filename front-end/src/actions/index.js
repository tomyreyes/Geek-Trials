import {
  FETCH_TRIVIA_REQUEST,
  FETCH_TRIVIA_SUCCESS,
  FETCH_TRIVIA_FAILED,
  SELECT_CATEGORY,
  NEXT_QUESTION,
  SELECT_DIFFICULTY,
} from '../constants'

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  payload: category,
})

export const selectDifficulty = category => ({
  type: SELECT_DIFFICULTY,
  payload: category,
})

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
  payload: 1,
})

export const fetchTriviaRequest = params => ({
  type: FETCH_TRIVIA_REQUEST,
  payload: params,
})

export const fetchTriviaSuccess = triviaData => ({
  type: FETCH_TRIVIA_SUCCESS,
  payload: triviaData,
})

export const fetchTriviaFailed = error => ({
  type: FETCH_TRIVIA_FAILED,
  payload: error,
})
