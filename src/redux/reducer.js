import { combineReducers } from 'redux';
import types from './types';

// {
//     phonebook: {
//     contacts: [],
//     filter: '',
//   },
// }

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_CONTACT:
      return [...state, payload];

    case types.DEL_CONTACT:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
