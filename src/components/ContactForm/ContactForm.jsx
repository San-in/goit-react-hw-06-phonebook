import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledForm,
  StyledInput,
  StyledFormBtn,
} from 'components/ContactForm/ContactForm.styled';

import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onAddContact = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget;

    const isContactExist = contacts.find(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );
    if (isContactExist) {
      alert(`${name.value} is already in contacts.`);
    } else {
      dispatch(
        addContact({
          name: name.value,
          number: number.value,
        })
      );
    }

    e.currentTarget.reset();
  };

  return (
    <StyledForm onSubmit={onAddContact}>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <StyledInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <StyledFormBtn type="submit">Add Contact</StyledFormBtn>
    </StyledForm>
  );
};
