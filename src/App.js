import './App.css';
import { connect } from 'react-redux';
import { useState } from 'react';
import shortid from 'shortid';
import ContactForm from './Component/ContactForm/ContactForm';
import Filter from './Component/Filter/Filter';
import ContactList from './Component/ContactList/ContactList';
import useLocalStorage from './Component/LocalStorage/LocalStorage';

export default function App() {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');

  // const getFilterSearch = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  // };

  // const onSearchChange = e => {
  //   setFilter(e.currentTarget.value);
  // };

  // const onDeleteContact = id => {
  //   setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };
  //   const equalName = contacts.find(item => item.name === contact.name);

  //   if (equalName) return alert(`${contact.name} is already in contacts`);

  //   setContacts(prevContacts => [...prevContacts, contact]);
  // };

  return (
    <>
      <div className="Input-form">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2 className="SearchName">Contact</h2>
        <Filter />
        {/* value={filter} onChange={onSearchChange} /> */}
        <ContactList />
        {/* contacts={getFilterSearch()} onDeleteContact={onDeleteContact} /> */}
      </div>
    </>
  );
}
