import { configureStore } from '@reduxjs/toolkit'; // store setup 과정을 단순하게 만듬
import { persistedReducer } from './reducers/index';

export default configureStore({
  reducer: persistedReducer, // root reducer 만들기
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ // reducx 제공 모든 기본 미들웨어 사용
    serializableCheck: false // non-serializable values(함수, 프라미스,심볼)값이 감지되면 콘솔창에 찍힘
  }),
  devTools: true // true: action stack traces를 개발 모드에서만 확인 할 수 있음
})