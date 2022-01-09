import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
  signInThunk,
  signUpThunk
} from './api/userApi'

let initialState = {
  info: {},
  loading: 'idle',
  currentRequestId: undefined,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState ,
  reducers: {
    logOutForce(state) {
        state = null;
        return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.fulfilled, (state, action) => {
        // 유저 정보를 저장하고,
        // signup_sucess 페이지에서 회원가입 완료 상태를 알려준다

        // ??액션에 어떤 내용이 올까?? 찍어보기
        // ?? state는 어떤 내용이 올까??
        initialState.info = action.payload;
        return state;
      }) 
      .addCase(signInThunk.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
  }
})

export const { logOutForce } = userSlice.actions
export default userSlice.reducer