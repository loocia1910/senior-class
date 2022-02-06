import { createAsyncThunk } from "@reduxjs/toolkit";
import customAxios from '../../utils/customAxios';


export const getTypeClassThunk = createAsyncThunk(
    'class/type',
    async ({ type }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.get(`/class/${type}`);
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const getClassDetailThunk = createAsyncThunk(
    'class/detail',
    async ({ classId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.get(`/product/${classId}`);
            console.log('classApi////res', res)
            return res.data;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

