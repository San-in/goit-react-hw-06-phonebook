import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContactItem,
  StyledContactBtn,
} from 'components/ContactItem/ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ item: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <StyledContactItem>
      <p>
        {name}: {number}
      </p>
      <StyledContactBtn
        type="button"
        onClick={({ target: { id } }) => dispatch(deleteContact(id))}
        id={id}
      >
        Delete
      </StyledContactBtn>
    </StyledContactItem>
  );
};

ContactItem.propTypes = {
  item: PropTypes.exact({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
