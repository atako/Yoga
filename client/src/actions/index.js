import axios from 'axios';

export const FETCH_ASANS = 'fetch_asans';
export const ADD_ASANA = 'add_asana';
export const DELETE_ASANA = 'delete_asana';
export const EDIT_ASANA = 'edit_asana';
export const SWITCH_TO_EDIT = 'switch_to_edit';
export const GET_ASANA = 'get_asana';
export const UPDATE_ASANA = 'update_asana';

const ROOT_URL = 'http://localhost:3000/api/asans';

export function fetchAsans() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_ASANS,
    payload: request
  };
} 

export function addAsana(values, callback) {
  const request = axios.post(`${ROOT_URL}`, values)
    .then(() => callback());

  return {
    type: ADD_ASANA,
    payload: request 
  };
}

export function deleteAsana(id, callback) {
  const request = axios.delete(`${ROOT_URL}/${id}`)
    .then(() => callback());

  return {
    type: DELETE_ASANA,
    payload: id
  };
}

export function getAsana(id) {
  const request = axios.get(`${ROOT_URL}/${id}`);

  return {
    type: EDIT_ASANA,
    payload: request
  };
}

export function updateAsana(id, values, callback) {
   const request = axios.post(`${ROOT_URL}/edit/${id}`, values)
    .then(() => callback());

  return {
    type: UPDATE_ASANA,
    payload: request
  };
}

