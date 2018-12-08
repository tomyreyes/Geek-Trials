import { all } from 'redux-saga/effects'
import watchQuestionData from './questionsSaga'

export default function* rootSaga() {
  yield all([watchQuestionData()])
}
