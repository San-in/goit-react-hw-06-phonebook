import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducers = {
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
};
