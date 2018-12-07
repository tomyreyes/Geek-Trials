import { combineReducers } from 'redux'
import categoryReducer from './categoryReducer'
import difficultyReducer from './difficultyReducer'

export const rootReducer = combineReducers({
  categoryReducer,
  difficultyReducer,
})

export { rootReducer as default }
