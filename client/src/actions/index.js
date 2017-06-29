import axios from 'axios';

export const FETCH_ASANS = 'fetch_asans';
export const ADD_ASANA = 'add_asana';

const ROOT_URL = 'http://localhost:3000/api/asans';

export function fetchAsans() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_ASANS,
    payload: request
  };
} 

export function addAsana() {
  const request = axios.post(`${ROOT_URL}`, {"title":"test04"} )

  return {
    type: ADD_ASANA,
    payload: request 
  };
}