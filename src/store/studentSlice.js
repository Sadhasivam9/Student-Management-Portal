// src/store/studentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    data: [],
  },
  reducers: {
    setStudents: (state, action) => {
      state.data = action.payload;
    },
    addStudent: (state, action) => {
      state.data.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.data = state.data.filter(student => student.id !== action.payload);
    },
  },
});

export const { setStudents, addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
