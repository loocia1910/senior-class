import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SignUpOk from './pages/signupok/SignUpOk';
import TeacherApply from './pages/teacherApply/TeacherApply';
import Mypage from './pages/mypage';
import ClassLike from './pages/mypage/classLikeList/ClassLikeList';
import AuthModify from './pages/mypage/authModify/AuthModify';
import Modify from './pages/mypage/modify/Modify';
import MyClass from './pages/myClassList/MyClassList';
import { ClassList, ClassListWrap } from './pages/class/classList/ClassList';

// app에서 path(또는 page)를 하나하나 만든다고 생각하면 된다
const App = () => {

  useEffect(() => {
    // 온라인, 오프라인, 최신, 무료 클래스 받아오기
    // 각각의 컴포넌트에게 받아온 데이터 props로 넘겨주기
  })

  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='signup_ok' element={<SignUpOk/>}/>
        <Route path='teacher/apply' element={<TeacherApply/>}/>
        <Route path='mypage' element={<Mypage/>}>
          <Route index element={<ClassLike />}/>
          <Route path='auth_modify' element={<AuthModify />}/>
          <Route path='modify' element={<Modify />}/>
          <Route path='myclass' element={<MyClass />}/>
        </Route>
        <Route path='class' element={<ClassListWrap />}>
          <Route path=':type' element={<ClassList/>}>
            <Route path=':category' element={<ClassList/>} >
              {/* <Route path=':classId' element={<ClassList/>} /> */}
            </Route>
            </Route>
        </Route>
        <Route path='*' element={<p>존재하지 않는 페이지 입니다.</p>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
