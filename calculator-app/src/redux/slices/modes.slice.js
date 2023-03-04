import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  darkMode: true
};

const modeSlice = createSlice({
  name: 'mode',
  initialState,
  reducers: {
    changeMode(state, { payload }){
        state.darkMode = payload;
    },
  }
})

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;

export const selectModeStatus = state => state.mode.darkMode;