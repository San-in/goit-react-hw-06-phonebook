import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(item => {
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
