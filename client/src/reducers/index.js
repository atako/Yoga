import AsansReducer from './reducer_asana';
import PlanReducer from './reducer_plan';
import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  asans: AsansReducer,
  plans: PlanReducer,
  form: formReducer
});

export default rootReducer;