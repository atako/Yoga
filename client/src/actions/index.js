import axios from 'axios';

export const FETCH_ASANS = 'fetch_asans';

const ROOT_URL = 'http://localhost:3000/api';

export function fetchAsans() {
  const request = axios.get(`${ROOT_URL}/asans`);

  return {
    type: FETCH_ASANS,
    payload: request
  };
}