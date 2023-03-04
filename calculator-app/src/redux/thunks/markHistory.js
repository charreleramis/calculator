import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/Api";


export default createAsyncThunk('update-history', async (params, { rejectWithValue, getState }) => {
    try {
        const response = await Api.post('/user/update', params);
        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('Error creating user');
    }
});
