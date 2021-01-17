import { combineReducers } from 'redux';

// Reducers
import courseReducer from './courseReducer';

export default combineReducers({
  courses: courseReducer,
})