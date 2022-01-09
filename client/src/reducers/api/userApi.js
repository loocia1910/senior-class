
import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';


export const signUpThunk = createAsyncThunk(
    'user/signUp',
    async ({ data }, { dispatch, rejectWithValue }) => {
        try {
            // 회원가입 성공 시
            // 리덕스에 로그인 사용자 정보 저장
            // 로그인을 시켜서
            // 회원가입 성공 페이지로 보냄
            const userData = await customAxios.post('/signup', { data } );

            return userData;

            // --> 콘솔 찍어보기,
            // --> userSlice에서 addCase 만든 후에 state 무슨값 나오는지 찍어보기

        } catch (err) {
            // rejectWithValue : 거절된 액션 페이로드에 거절된 반응을 리턴
            return rejectWithValue(err);
            // 위에서 성공 응답을 못 받은 경우 .unwrap()은 rejected action에 rejectWithValue에서 생성된 페이로드를 dispatch 할때 리턴한다
        }
    }
);

export const signInThunk = createAsyncThunk(
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

export const serverValidateNickname = async (data) => {
    console.log('닉네임', data)
    const res = await customAxios.post('/validation/nickname', data);

    return res;
}

export const serverValidateLoginId = async (data) => {
    const res = await customAxios.post('/validation/loginId', data);
    return res;
}