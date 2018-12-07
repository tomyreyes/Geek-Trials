import { SELECT_CATEGORY } from '../constants'

const initialState = {
  id: null,
}
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      return Object.assign({}, state, { id: action.payload })
    default:
      return state
  }
}

export default categoryReducer
