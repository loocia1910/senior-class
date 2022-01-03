import { combineReducers } from '@reduxjs/toolkit'; // 여러개의 reducing function을 한 개의 reducing function으로 바꿔줌

import { useReducer } from './userSlice';

export const persistedReducer = persistReducer(
    combineReducers({ 
        user: useReducer
    })
);