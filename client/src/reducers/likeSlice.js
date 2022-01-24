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
        const mylikes = action.payload
        state = mylikes;
      })
      .addCase(addlikesThunk.fulfilled, (state, action) => {
        const addedClassId = action.payload;
        state.push(addedClassId);
      }) 
      .addCase(deleteLikesThunk.fulfilled, (state, action) => {
        const deletedClassId = action.payload
        state = state.filter((classId) => classId !== deletedClassId);
      })
      .addDefaultCase((state) => {
        return state;
      })
  }
})

export const { logOutMylikes } = likeSlice.actions;
export default likeSlice.reducer;
