import { SELECT_CATEGORY, NEXT_QUESTION, SELECT_DIFFICULTY } from '../constants'

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
