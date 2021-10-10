import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

// const reducer = (state = {}, action) => {
//   console.log('🚀 ~ file: store.js ~ line 5 ~ reducer ~ action', action);
//   return state;
// };

const rootReducer = combineReducers({
  phonebook: reducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
