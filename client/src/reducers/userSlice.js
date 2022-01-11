import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
  signInThunk,
  signUpThunk
} from './api/userApi'

let initialState = {
  name: '',
  login_id: '',
  nickname: '',
  is_login: false,
  is_teacher: false,
  error: null,
  status: ''
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
        state.status = 'fulfilled';
        state.name = action.payload.data.name;
        state.login_id = action.payload.data.login_id;
        return state;
      }) 
      .addCase(signUpThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
        console.log('state.error', state.error)
        return state;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        // state.login_id = action.payload;
        return state;
      })
  }
})

export const { logOutForce } = userSlice.actions
export default userSlice.reducer