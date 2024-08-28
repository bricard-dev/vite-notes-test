import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: undefined,
};

const notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNotesFromAPI: (state, action) => {
      state.list = action.payload;
    },
  },
});

export function getNotesFromAPI(action) {
  return function (dispatch, getState) {
    fetch(`/data/notes.json`)
      .then((response) => response.json())
      .then((data) => dispatch(addNotesFromAPI(data.notes)));
  };
}

export const { addNotesFromAPI } = notes.actions;
export default notes.reducer;