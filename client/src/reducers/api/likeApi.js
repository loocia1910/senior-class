import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';


export const getMyLikesThunk = createAsyncThunk(
    'like/mylikes',
    async ({ loginId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.get(`/class/mylike/${loginId}`);
            return res.data.myLikes;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const addlikesThunk = createAsyncThunk(
    'like/add',
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
    'like/delete',
    async ({ userId, classId }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.post('/class/unlike', { userId, classId } );

            return res.data.myLikes;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);