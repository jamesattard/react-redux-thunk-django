import axios from 'axios';

export function fetchUsers() {
  //const request = axios.get('http://jsonplaceholder.typicode.com/users');
  const request = axios.get('http://localhost:7777/products/'); // Django backend

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({ type: 'FETCH_PROFILES', payload: data })
    });
  };
}
