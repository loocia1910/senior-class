import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';


export const getMyLikesThunk = createAsyncThunk(
    'class/mylikes',
    async ({ userId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.get(`/class/mylike/${userId}`);
            return res;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const addlikesThunk = createAsyncThunk(
    'class/like',
    async ({ userId, classId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.post('/class/like', { userId, classId } );
            return res.data.myLikes;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const deleteLikesThunk = createAsyncThunk(
    'class/unlike',
    async ({ userId, classId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.post('/class/unlike', { userId, classId } );
            return res.data.myLikes;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);