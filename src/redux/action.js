import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('ADD_CONTACT', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

const deleteContact = createAction('DELETE');

const changeFilter = createAction('CHANGE_FILTER');

export default { addContact, deleteContact, changeFilter };
