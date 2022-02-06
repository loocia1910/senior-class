import { createSlice } from "@reduxjs/toolkit";

import {
    getTypeClassThunk,
    getClassDetailThunk
} from './api/classApi'

let initialState = {
    onlineClass: [],
    offlineClass: [],
    latestClass :[],
    freeClass: [],
    myClass: [],
    classDetail: {}
}

const classSlice = createSlice({
    name: 'class',
    initialState,
    reducers: {
        logOutMyClass(state) {
            state.myClass = [];
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
            console.log('classSlice/action.payload', action.payload)
            const { classDetail } = action.payload;
            state.classDetail = classDetail;
            return state;
        })          
          .addDefaultCase((state) => {
              return state;
          })
    }
})

export const { logOutMyClass } = classSlice.actions;
export default classSlice.reducer;
