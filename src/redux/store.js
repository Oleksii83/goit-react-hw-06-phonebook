import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';

// const reducer = (state = {}, action) => {
//   console.log('🚀 ~ file: store.js ~ line 5 ~ reducer ~ action', action);
//   return state;
// };

// const rootReducer = combineReducers({
//   phonebook: reducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
const store = configureStore({
  reducer: {
    phonebook: reducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
