import { Routes, Route} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SignUpOk from './pages/signupok/SignUpOk';
import Mypage from './pages/mypage';
import ClassLike from './pages/mypage/classLikeList/ClassLikeList';
import MyReview from './pages/mypage/myReviewList/MyReviewList';
import AuthModify from './pages/mypage/authModify/AuthModify';
import Modify from './pages/mypage/modify/Modify';
import MyClass from './pages/myClassList/MyClassList';

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
        <Route path='mypage' element={<Mypage/>}>
          <Route path='class_wish' index element={<ClassLike />}/>
          <Route path='class_review' element={<MyReview />}/>
          <Route path='auth_modify' element={<AuthModify />}/>
          <Route path='modify' element={<Modify />}/>
        </Route>
        <Route path='myclass' element={<MyClass />}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
