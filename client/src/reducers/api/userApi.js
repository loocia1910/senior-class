import axios from 'axios';
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

const signInSuccess = async (res, navigate) => {
    /**
     * 로그인 성공 시
     * API 요청마다 헤더에 accessToken 담아 보내도록 설정
     * signInRefreshThunk를 디스패치: 
     *       - 목적: 로그인 유지
     *       - jwt토큰이 만료되기 1분 전에 refresh 토큰을 이용하여 refresh toekn과 access token이 재발급되도록 함
    **/
    const { accessToken } = res.data;
    console.log('signInSuccess에 accessToken', accessToken);
    // API 요청마다 헤더에 accessToken 담아 보내도록 설정
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;// ??? 과연 모든 요청의 해더에 이 값이 있을까???
    navigate('/');
}


export const signInThunk = createAsyncThunk(
    'user/signIn',
    async ({ loginData, navigate }, { dispatch, rejectWithValue }) => {
        try {
            const res = await customAxios.post('/signin', { loginData } );
            /**
             * 로그인이 성공하면
             * 1. 서버로 부터 받은 accessToken을 header에 저장해놓는다.
             * 2. accessToken이 토큰이 만료되기 1분 전에 
             *    "/signInRefresh"로 요청을 보내 리프레시 토큰과 엑세스 토큰을 재발급 받는다
             * 3. "/"로 리다이렉트 한다
             * 4. 다시 로그인이 성공한 상태
             *   4-1 서버로 부터 받은 accessToken을 header에 저장해놓는다.
             *   4-2 accessToken이 토큰이 만료되기 1분 전에 
             *    "/signInRefresh"로 요청을 보내 리프레시 토큰과 엑세스 토큰을 재발급 받는다
             *   4-3 "/"로 리다이렉트한다.
             * **/
            await signInSuccess(res, navigate);
            const JWT_EXPIRRY_TIME = 1000 * 3600 * 24 // accessToken 만료시간:24시간
            setTimeout(dispatch(signInRefreshThunk({ navigate })).unwrap(), JWT_EXPIRRY_TIME - 60000)
            return res;
            
            // await.Promise.all([
                // dispatch(나의 리뷰).unwrap(),
                // dispatch(나의 클래스 찜).unwrap(),
                // dispatch(나의 클래스).unwrap()
                // ])
        } catch (err) {
            dispatch(logOutForce());
            return rejectWithValue(err);
        }
    }
);

export const signInRefreshThunk = createAsyncThunk(
    'user/signInRefresh',
    async ({ navigate, isLogoutBtnClicked }, { dispatch, rejectWithValue }) => {
        try {
            // if(isLogoutBtnClicked) {
            //     dispatch(logOutForce());
            //     return;
            // }
            // accessToken과 refreshToken을 재발급 받는다
            const res = await customAxios.get('/silentRefresh');
            signInSuccess(res, navigate);
            return res;
        } catch (err) {
            dispatch(logOutForce());
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
        const res = await customAxios.delete('/signout');
        navigate('/');
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