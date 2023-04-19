import { LOGIN_REQUEST } from '../constants'

export const loginRequest = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: { username, password },
})
