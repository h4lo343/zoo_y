import { createStore, combineReducers } from "redux";
import loginReducer from "./login_reducer";
import commentReducer from "./comment_reducer";
import bufferReducer from "./buffer_reducer";
import userReducer from './user_reducer'

const allReducer = combineReducers({
  user: loginReducer,
  comment : commentReducer,
  buffer : bufferReducer,
  userState : userReducer
})

export default createStore(allReducer)