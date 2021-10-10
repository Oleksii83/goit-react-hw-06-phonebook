import React from 'react';
import s from './ContactList.module.css';
import { connect } from 'react-redux';
import actions from '../../redux/action';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.container}>
    {contacts.map(({ name, number, id }) => (
      <li key={id} className={s.item}>
        {name}: {number}
        <button type="button" onClick={() => onDeleteContact(id)} className={s.btn}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = state => ({ contacts: state.phonebook.contacts });

// const mapDispatchToProps = dispath => ({
//   onDeleteContact: id => dispatch(actions.deleteContact(id)),
// });

export default connect(mapStateToProps)(ContactList);
