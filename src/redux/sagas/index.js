import accountSaga from './account.saga'
import { all } from 'redux-saga/effects'
import { fork } from 'redux-saga/effects'

export default function* mySaga() {
  yield all([fork(accountSaga)])
}
