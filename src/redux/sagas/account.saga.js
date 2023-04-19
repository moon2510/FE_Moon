import axios from 'axios'
import { toast } from 'react-toastify'
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants'
import { takeLatest, call, put } from 'redux-saga/effects'

const loginSaga = function* (action) {
  try {
    const response = yield call(
      axios.post,
      'http://localhost:5000/api/user/auth/login',
      action.payload
    )
    console.log(response)
    if ('failed' === response.data.status && response.data.error.message) {
      toast.error(response.data.error.message)
    }
    const { token } = response.data
    localStorage.setItem('token', token)
    yield put({ type: LOGIN_SUCCESS })
    toast.success('Login successful')
  } catch (error) {
    yield put({ type: LOGIN_FAILURE, payload: error })
    toast.error('Login failed')
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga)
}
