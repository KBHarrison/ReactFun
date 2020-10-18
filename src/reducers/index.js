import { combineReducers } from  'redux'
import commentsReducer from "./comments"
import authReducer from './Auth'

// THIS IS THE REDUX STATE
export default combineReducers({
    comments: commentsReducer,
    auth: authReducer
})