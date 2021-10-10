import types from './types';
import shortid from 'shortid';

export const myAction = value => ({
  type: 'MY_ACTION',
  payload: value,
});

const addContact = ({ name, number }) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  types: types.DEL_CONTACT,
  payload: id,
});

export default { addContact, deleteContact };
