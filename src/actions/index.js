import * as types from './actionTypes';
import productsApi from '../api/productsApi';

export function fetchProductsSuccess(products) {
  return {type: types.FETCH_PRODUCTS, payload: products};
}

export function fetchProducts() {
  // make async call to api, handle promise, dispatch action when promise is resolved
  console.log(productsApi);
  return function(dispatch) {
    return productsApi.getAllProducts().then(products => {
      dispatch(fetchProductsSuccess(products));
    }).catch(error => {
      throw(error);
    });
  };
}
