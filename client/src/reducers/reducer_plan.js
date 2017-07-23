import { GET_PLAN_LIST, GET_PLAN_DETAIL, ADD_PLAN } from '../actions';

export default function(state = {}, action) {
switch(action.type) {
  case GET_PLAN_LIST:
    const planList = _.mapKeys(action.payload.data, '_id');
    return planList;
  case GET_PLAN_DETAIL:
    const planDetail = (action.payload.data);
    return planDetail;
  default:
    return state;
}
}