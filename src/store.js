import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './features/notes';

export default configureStore({
  reducer: {
    notes: notesReducer,
  },
});
