import _ from 'lodash';
import { FETCH_ASANS } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ASANS:
      return _.mapKeys(action.payload.data, '_id');
      // const newState = { ...state };
      // newState[asana._id] = asana;
      // return newState;
    default:
      return state;
  }
}