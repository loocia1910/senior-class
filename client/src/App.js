import { useEffect, useState } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SignUpOk from './pages/signupok/SignUpOk';
import { signInRefreshThunk } from '../src/reducers/api/userApi';

// app에서 path(또는 page)를 하나하나 만든다고 생각하면 된다
function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.is_login);

  // 새로고침시 로그인 유지
  useEffect(() => {
    // 로그아웃버튼이 눌리고 로그아웃이 되었다면 리턴
    console.log('isLoginisLogin====',isLogin)

    dispatch(signInRefreshThunk({ navigate, isLogin }));
  }, [isLogin]);

  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signup_ok' element={<SignUpOk/>}/>
        {/* <Route path='mypage' element={<SignUpOk/>}>
           <Route path='signup_ok' element={<SignUpOk/>}/>
        </Route> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
