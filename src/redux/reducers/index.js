import { combineReducers } from 'redux'
import authReducer from './account.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
