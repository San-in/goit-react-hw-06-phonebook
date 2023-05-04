import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contact',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        state.push(payload);
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
