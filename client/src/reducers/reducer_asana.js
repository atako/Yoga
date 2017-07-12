import _ from 'lodash';
import { FETCH_ASANS, ADD_ASANA, EDIT_ASANA, GET_PLAN_LIST } from '../actions';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_ASANS:
      const data = _.mapKeys(action.payload.data, '_id');
      return data;
    case EDIT_ASANA:
      const asana = (action.payload.data);
      return asana;
    case GET_PLAN_LIST:
      const planList = _.mapKeys(action.payload.data, '_id');
      return planList;

    default:
      return state;
  }
}