import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/Api";

export default createAsyncThunk('get-history', async (params, { rejectWithValue, getState }) => {
    const { auth : { userId } } = getState();
    console.log('get-history | userId thunk',  userId);
    const response = await Api.get(`user/${userId}`, params);
    return response.data;
});