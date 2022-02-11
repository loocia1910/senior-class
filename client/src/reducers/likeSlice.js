import { createSlice } from '@reduxjs/toolkit'; // reducer 로직과 action을 단순화 시킴

import {
    getMyLikesThunk,
    addlikesThunk,
    deleteLikesThunk
} from './api/likeApi'

let initialState = [];

const likeSlice = createSlice({
  name: 'like',
  initialState ,
  reducers: {
    logOutMylikes(state) {
      state = [];
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyLikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload
        state = myLikes;
        return state;
      })
      .addCase(addlikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload;
        state = myLikes;
        return state;
      }) 
      .addCase(deleteLikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload
        state = myLikes;
        return state;
      })
      .addDefaultCase((state) => {
        return state;
      })
  }
})

export const { logOutMylikes } = likeSlice.actions;
export default likeSlice.reducer;
