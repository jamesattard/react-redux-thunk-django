import axios from 'axios';

class productsApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Token ${sessionStorage.jwt}`}
  }

  static getAllProducts() {
    const headers = this.requestHeaders();
    // const request = axios.get('http://jsonplaceholder.typicode.com/users');
    const request = axios.get('http://localhost:7777/products/'); // Django backend

    return request.then(response => {
      return response.data;
    }).catch(error => {
      return error;
    });
  }
}

export default productsApi;
