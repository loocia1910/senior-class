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
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMyLikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload
        state = myLikes;
      })
      .addCase(addlikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload;
        state = myLikes;
      }) 
      .addCase(deleteLikesThunk.fulfilled, (state, action) => {
        const myLikes = action.payload
        state = myLikes;
      })
      .addDefaultCase((state) => {
        return state;
      })
  }
})

export const { logOutMylikes } = likeSlice.actions;
export default likeSlice.reducer;
