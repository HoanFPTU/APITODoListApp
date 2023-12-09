import axios from 'axios';

export const getTask = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  return axios.get(url);
};
