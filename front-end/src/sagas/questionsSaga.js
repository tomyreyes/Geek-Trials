import { takeEvery, call, put } from 'redux-saga'
import axios from 'axios'
import { FETCH_TRIVIA_REQUEST, FETCH_TRIVIA_SUCCESS, FETCH_TRIVIA_FAILED } from '../constants'

export function* fetchQuestions(action) {
  const { categoryId, difficulty } = action.payload
  try {
    const questions = yield call(
      axios.get('localhost:8080//get-questions', {
        params: {
          categoryId,
          difficulty,
        },
      }),
    )
    yield put({ type: FETCH_TRIVIA_SUCCESS, questions })
  } catch (error) {
    yield put({ type: FETCH_TRIVIA_FAILED, error })
  }
}

export function* watchQuestionData() {
  yield takeEvery(FETCH_TRIVIA_REQUEST, fetchQuestions)
}
