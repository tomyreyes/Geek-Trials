const SELECT_CATEGORY_REQUEST = 'SELECT_CATEGORY'
const NEXT_QUESTION = 'NEXT_QUESTION'

export const selectCategoryRequest = category => ({
  type: SELECT_CATEGORY_REQUEST,
  payload: category,
})

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
  payload: 1,
})
