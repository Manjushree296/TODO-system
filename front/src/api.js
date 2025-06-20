import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/todos', // make sure port matches backend
});

export default api;
