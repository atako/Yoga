import AsansReducer from './reducer_asana';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  asans: AsansReducer
});

export default rootReducer;