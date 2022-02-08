import { createSlice } from "@reduxjs/toolkit";

import {
    getTypeClassThunk,
    getClassDetailThunk,
    getClassReviewThunk
} from './api/classApi'

let initialState = {
    onlineClass: [],
    offlineClass: [],
    latestClass :[],
    freeClass: [],
    classDetail: {},
    classReviews: []
}

const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
        returnClass(state) {
            return state;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(getTypeClassThunk.fulfilled, (state, action) => {
              const { onlineClass,  offlineClass, latestClass, freeClass} = action.payload;
              if(onlineClass) {
                  state.onlineClass = onlineClass;
              } else if(offlineClass) {
                  state.offlineClass = offlineClass;
              } else if(latestClass) {
                  state.latestClass = latestClass;
              } else if(freeClass) {
                  state.freeClass = freeClass;
              }
              return state;
          })
          .addCase(getClassDetailThunk.fulfilled, (state, action) => {
            const { classDetail } = action.payload;
            state.classDetail = classDetail;
            return state;
          })
          .addCase(getClassReviewThunk.fulfilled, (state, action) => {
              const { classReviews } = action.payload;
              state.classReviews = classReviews;
              return state;
          })                      
          .addDefaultCase((state) => {
            return state;
          })
    }
})

export default classSlice.reducer;
