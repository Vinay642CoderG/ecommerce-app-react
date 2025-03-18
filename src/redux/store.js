import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducers';
import productReducer from './productReducers';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
