import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../constants'

const initialState = {
  isLoggingIn: false,
  error: null,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoggingIn: true, error: null }
    case LOGIN_SUCCESS:
      return { ...state, isLoggingIn: false, error: null }
    case LOGIN_FAILURE:
      return { ...state, isLoggingIn: false, error: action.payload }
    default:
      return state
  }
}
