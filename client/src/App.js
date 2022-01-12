import { Routes, Route} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SignUpOk from './pages/signupok/SignUpOk';

// app에서 path(또는 page)를 하나하나 만든다고 생각하면 된다

function App() {
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
