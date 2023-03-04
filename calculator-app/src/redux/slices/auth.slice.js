import { createSlice } from '@reduxjs/toolkit';
import createUser from '../thunks/createUser';

const initialState = {
  response: '',
  userId: '',
  userToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthRedux (state, { payload }) {
        state.userId = payload.uuid;
        state.userToken = payload.token;
    },

  }, extraReducers: builder => {
    builder
    .addCase(createUser.pending, (state, action) => {
    })
    .addCase(createUser.fulfilled, (state, { payload }) => {
        state.userId = payload.user.uuid;
        state.userToken = payload.user.token;

    })
    .addCase(createUser.rejected, (state, action) => {
    })

  }
})

export const { setAuthRedux } = authSlice.actions;

export default authSlice.reducer;

export const selectAuthProps = state => state.auth;