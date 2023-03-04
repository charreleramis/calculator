import { createSlice } from '@reduxjs/toolkit';
import createUser from '../thunks/createUser';
import getHistory from '../thunks/getHistory';

const initialState = {
  data: []
};

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    updateHistory (state, { payload }) {
      state.data = [...state.data, payload];
    },

    emptyHistory (state, { payload }) {
      state.data = []
  },

  }, extraReducers: builder => {
    builder
    .addCase(getHistory.pending, (state, action) => {
    })
    .addCase(getHistory.fulfilled, (state, { payload }) => {
      state.data = payload;
    })
    .addCase(getHistory.rejected, (state, action) => {
    })

  }
})

export const { emptyHistory, updateHistory } = historySlice.actions;

export default historySlice.reducer;

export const selectHistoryData = state => state.history.data;