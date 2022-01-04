import { combineReducers } from '@reduxjs/toolkit'; // 여러개의 reducing function을 한 개의 reducing function으로 바꿔줌

import userReducer from './userSlice';

export const persistedReducer = combineReducers({ 
        user: userReducer
})

