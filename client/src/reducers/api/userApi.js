import { createAsyncThunk } from '@reduxjs/toolkit';
import customAxios from '../../utils/customAxios';
import { logOutForce } from '../userSlice'


export const signUpThunk = createAsyncThunk(
    'user/signUp',
    async ({ userState, navigate }, { dispatch, rejectWithValue }) => {
        try {
            // 회원가입 성공 시
            // 회원가입 성공 페이지로 보냄
            const res = await customAxios.post('/signup', { userState } );

            navigate('/signup_ok')
            // 리턴값은 action이 됨
            return res;

        } catch (err) {
            // rejectWithValue : 거절된 액션 페이로드에 거절된 반응을 리턴
            // 위에서 성공 응답을 못 받은 경우 .unwrap()은 rejected action에 rejectWithValue에서 생성된 페이로드를 dispatch 할때 리턴한다
            return rejectWithValue(err);
        }
    }
);

export const signInThunk = createAsyncThunk(
    'user/signIn',
    async ({ loginData, navigate }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.post('/signin', { loginData } );
            // await.Promise.all([
                // dispatch(나의 리뷰).unwrap(),
                // dispatch(나의 클래스 찜).unwrap(),
                // dispatch(나의 클래스).unwrap()
            // ])
            console.log('signInThunk에 res--->', res)
            navigate('/')
            return res;

        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const signOutThunk = createAsyncThunk(
    'user/signOut',
    async ({ navigate }, { dispatch, rejectWithValue }) => {
      try {
        // dispatch(logOutClassLike());
        // dispatch(logOutMyClassList());
        // dispatch(logOutMyClassReview());
        const res = await customAxios.post('/signout');
        navigate('/signin');
        return res;
      } catch (err) {
           dispatch(logOutForce());
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