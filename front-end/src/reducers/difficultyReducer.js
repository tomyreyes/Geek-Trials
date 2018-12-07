import { SELECT_DIFFICULTY } from '../constants'

const initialState = {
  id: null,
}

const difficultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_DIFFICULTY:
      return Object.assign({}, state, { id: action.payload })
    default:
      return state
  }
}

export { difficultyReducer as default }
