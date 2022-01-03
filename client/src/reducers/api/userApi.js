import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';

// createAsynThunk 더 깊이 공부하기
export const signIn = createAsyncThunk(
    'user/signIn',
    async (data, { dispatch, rejectWithValue }) => {
        try {
            const user = await customAxios.post('/signin', data );
            // await.Promise.all([
                // dispatch(나의 리뷰).unwrap(),
                // dispatch(나의 클래스 찜).unwrap(),
                // dispatch(나의 클래스).unwrap()
            // ])
            return user.data;
            // --> 콘솔 찍어보기,
            // --> userSlice에서 addCase 만든 후에 state 무슨값 나오는지 찍어보기

        } catch (err) {
            // rejectWithValue : 거절된 액션 페이로드에 거절된 반응을 리턴
            return rejectWithValue(err);
        }
    }
);