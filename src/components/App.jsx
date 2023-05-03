import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList ';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export const App = () => {
  // const initialValue = () => JSON.parse(localStorage.getItem('contacts')) ?? [];
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const createFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h3>Phonebook</h3>
      <ContactForm />
      <h3>Contacts</h3>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList contactsList={createFilteredList()} />
        </>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};
