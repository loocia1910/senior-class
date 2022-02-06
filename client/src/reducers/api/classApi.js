import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../utils/customAxios';


export const getOnlineClassThunk = createAsyncThunk(
    'class/online',
    async ({ params }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.get(`/class/${params}`);
            console.log('classApi////res', res)
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

