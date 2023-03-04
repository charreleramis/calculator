import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/Api";

export default createAsyncThunk('clear-history', async (params, { rejectWithValue, getState }) => {
    const { auth : { userId } } = getState();
    console.log('clear userId thunk',  userId);
    const response = await Api.delete(`user/${userId}/transaction`);
    return response.data;
});