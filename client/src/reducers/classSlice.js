import { createSlice } from "@reduxjs/toolkit";

import {
    getOnlineClassThunk
} from './api/classApi'

let initialState = {
    onlineClass: [],
    offlineClass: [],
    latestClass :[],
    freeClass: [],
    myClass: []
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
          .addCase(getOnlineClassThunk.fulfilled, (state, action) => {
              console.log('classSlice/action.payload', action.payload)
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
          .addDefaultCase((state) => {
              return state;
          })
    }
})

export const { logOutMyClass } = classSlice.actions;
export default classSlice.reducer;
