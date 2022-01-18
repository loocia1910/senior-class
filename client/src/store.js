import { configureStore } from '@reduxjs/toolkit'; 
import { persistedReducer } from './reducers/index';

export default configureStore({
  reducer: persistedReducer, // root reducer 만들기
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
    serializableCheck: false 
  }),
  devTools: true
})