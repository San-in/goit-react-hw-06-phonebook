import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        if (
          state.find(
            ({ name }) => name.toLowerCase() === payload.name.toLowerCase()
          )
        ) {
          alert(`${payload.name} is already in contacts.`);
        } else {
          state.push(payload);
        }
      },
      prepare(contactsInfo) {
        return {
          payload: {
            ...contactsInfo,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, { payload }) {
      return state.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
