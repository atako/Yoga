import AsansReducer from './reducer_asana';
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  asans: AsansReducer,
  form: formReducer
});

export default rootReducer;