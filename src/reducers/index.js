import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products: (state = [], action) => action.payload || state
});

export default rootReducer;
