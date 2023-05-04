import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const createFilteredList = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.value.toLowerCase())
    );
  };
  return (
    <ul>
      {createFilteredList().map(item => {
        return <ContactItem item={item} key={item.id} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    }).isRequired
  ),
};
