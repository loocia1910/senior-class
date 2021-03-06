import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
  signUpThunk,
  signInThunk,
  signOutThunk,
  signInRefreshThunk,
  authModifyThunk,
  modifyThunk,
  profileImgThunk,
  getMyReviewThunk,
  withdrawalThunk  
} from './api/userApi'


let initialState = {
  user_id: null,
  name: '',
  login_id: '',
  nickname: '',
  is_login: false,
  is_teacher: false,
  profile_url: '',
  error: null,
  isAuthorized: false,
  myReview: []
}

const userSlice = createSlice({
  name: 'user',
  initialState ,
  reducers: {
    // thunk에서 err를 만나면 강제로 로그아웃 시키기 위한 리듀서
    logOutForce(state) {
      state.user_id = null;
      state.name = '';
      state.login_id = '';
      state.nickname = '';
      state.profile_url = '';
      state.is_teacher = false;
      state.is_login = false;
      state.isAuthorized = false;
      state.myReview = [];
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        state.name = action.payload.data.name;
        state.login_id = action.payload.data.login_id;
        return state;
      }) 
      .addCase(signUpThunk.rejected, (state, action) => {
        state.error = action.error.message;
        return state;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        const {id, name, login_id, nickname, profile_url, is_teacher } = action.payload.data.userInfo
        state.user_id = id;
        state.name = name;
        state.login_id = login_id;
        state.nickname = nickname;
        state.profile_url = profile_url;
        state.is_teacher = is_teacher;
        state.is_login = true;
        state.isAuthorized = false;
        return state;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = action.error.message
        return state;
      })
      .addCase(signOutThunk.fulfilled, (state, action) => {
        state.user_id = null;
        state.name = '';
        state.login_id = '';
        state.nickname = '';
        state.profile_url = '';
        state.is_teacher = false;
        state.is_login = false;
        state.isAuthorized = false;
        state.myReview = [];
        return state;
      })
      .addCase(signInRefreshThunk.fulfilled, (state, action) => {
        const {name, login_id, nickname, profile_url, is_teacher} = action.payload.data.userInfo
        state.name = name;
        state.login_id = login_id;
        state.nickname = nickname;
        state.profile_url = profile_url;
        state.is_teacher = is_teacher;
        state.is_login = true;
        state.isAuthorized = false;
        return state;
      })
      .addCase(signInRefreshThunk.rejected, (state, action) => {
        state.error = action.error.message
        return state;
      })
      .addCase(authModifyThunk.fulfilled, (state, action) => {
        state.isAuthorized = true;
        return state;
      })
      .addCase(modifyThunk.fulfilled, (state, action) => {
        state.nickname = action.payload 
        return state;
      })
      .addCase(profileImgThunk.fulfilled, (state, action) => {
        state.profile_url = action.payload 
        return state;
      })
      .addCase(getMyReviewThunk.fulfilled, (state, action) => {
        const { myReview } = action.payload;
        state.myReview = myReview;
        return state;
      })
      .addCase(withdrawalThunk.fulfilled, (state, action) => {
        state.user_id = null;
        state.name = '';
        state.login_id = '';
        state.nickname = '';
        state.profile_url = '';
        state.myReview = [];
        state.is_teacher = false;
        state.is_login = false;
        state.isAuthorized = false;
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      });
  }
})

export const { logOutForce } = userSlice.actions;
export default userSlice.reducer