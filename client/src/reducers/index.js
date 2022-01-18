import { combineReducers } from '@reduxjs/toolkit'; // 여러개의 reducing function을 한 개의 reducing function으로 바꿔줌
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localstorage에 저장
import userReducer from './userSlice';

const persistConfig = {
  key: 'root',
  storage
}

export const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ 
    user: userReducer
  })
)

