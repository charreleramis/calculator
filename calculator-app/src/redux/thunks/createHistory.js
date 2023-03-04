import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/Api";

export default createAsyncThunk('create-history', async (params, { rejectWithValue, getState }) => {
    const { auth : { userId } } = getState();
    console.log('userId thunk',  userId);
    const response = await Api.post(`user/${userId}/transaction`, params);
    return response.data;
});