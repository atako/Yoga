import _ from 'lodash';
import { FETCH_ASANS, ADD_ASANA } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ASANS:
      const data = _.mapKeys(action.payload.data, '_id');
      return data;
    default:
      return state;
  }
}