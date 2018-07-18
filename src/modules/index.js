import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import userReducer from '../containers/user/UserReducer';

export default combineReducers({
  routing: routerReducer,
  user: userReducer
})