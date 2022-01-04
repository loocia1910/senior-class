import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
    signIn
} from './api/userApi'

const initialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOutForce(state) {
        state = null;
        return state
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state = action.payload;
        return state;
      })
  }
})

export const { logOutForce } = userSlice.actions
export default userSlice.reducer