import axios from 'axios';

const httpClientGet = axios.create({
  baseURL: 'http://localhost:3001',
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
});

export default httpClientGet;
