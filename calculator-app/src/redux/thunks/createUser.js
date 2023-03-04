import { createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../utils/Api";


export default createAsyncThunk('create-user', async (params, { rejectWithValue, getState }) => {
    try {
        console.log(params);
        const response = await Api.post('user', params);
        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('Error creating user');
    }
});
