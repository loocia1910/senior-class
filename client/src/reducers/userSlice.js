import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
  signUpThunk,
  signInThunk,
  signOutThunk,
  signInRefreshThunk  
} from './api/userApi'

let initialState = {
  name: '',
  login_id: '',
  nickname: '',
  is_login: false,
  is_teacher: false,
  info: '',
  profile_url: '',
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState ,
  reducers: {
    // thunk에서 err를 만나면 강제로 로그아웃 시키기 위한 리듀서
    logOutForce(state) {
      state.name = '';
      state.login_id = '';
      state.nickname = '';
      state.profile_url = '';
      state.is_teacher = false;
      state.info = '';
      state.is_login = false;
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
        const {name, login_id, nickname, profile_url, is_teacher, info} = action.payload.data.userInfo
        state.name = name;
        state.login_id = login_id;
        state.nickname = nickname;
        state.profile_url = profile_url;
        state.is_teacher = is_teacher;
        state.info = info;
        state.is_login = true;
        return state;
      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.error = action.error.message
        return state;
      })
      .addCase(signOutThunk.fulfilled, (state, action) => {
        state.name = '';
        state.login_id = '';
        state.nickname = '';
        state.profile_url = '';
        state.is_teacher = false;
        state.info = '';
        state.is_login = false;
        console.log('signout 상태========', state)
        return state;
      })
      .addCase(signInRefreshThunk.fulfilled, (state, action) => {
        const {name, login_id, nickname, profile_url, is_teacher, info} = action.payload.data.userInfo
        console.log('userslice에 signInRefreshThunk action.payload--->', action.payload)
        state.name = name;
        state.login_id = login_id;
        state.nickname = nickname;
        state.profile_url = profile_url;
        state.is_teacher = is_teacher;
        state.info = info;
        state.is_login = true;
        return state;
      })
      .addCase(signInRefreshThunk.rejected, (state, action) => {
        state.error = action.error.message
        return state;
      })
  }
})

export const { logOutForce } = userSlice.actions;
export default userSlice.reducer