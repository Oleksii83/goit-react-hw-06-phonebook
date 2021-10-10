import types from './types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  types: types.DELETE,
  payload: id,
});

const changeFilter = value => ({
  types: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
