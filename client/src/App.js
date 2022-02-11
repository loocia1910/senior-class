import { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import SignUpOk from './pages/signupok/SignUpOk';
import TeacherApply from './pages/teacherApply/TeacherApply';
import Mypage from './pages/mypage';
import MyClass from './pages/myClassList/MyClassList';
import AuthModify from './pages/mypage/authModify/AuthModify';
import Modify from './pages/mypage/modify/Modify';
import MyReview from './pages/mypage/myReviewList/MyReviewList';
import ClassLike from './pages/mypage/classLikeList/ClassLikeList';
import ClassSearch from './pages/class/classSearch/ClassSearch';
import ClassDetail from './pages/class/classDetail/ClassDetail';
import { ClassList, ClassListWrap } from './pages/class/classList/ClassList';
import { getTypeClassThunk } from './reducers/api/classApi';
import WrongResult from './pages/wrongResult/WrongResult';

// app에서 path(또는 page)를 하나하나 만든다고 생각하면 된다
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getOnlineClass = async () => {
      try {
        await dispatch(getTypeClassThunk({ type: 'online' })).unwrap();
      } catch (err) {
        throw err;
      }
    }
  
    const getOfflineClass = async () => {
      try {
        await dispatch(getTypeClassThunk({ type: 'offline' })).unwrap();
      } catch (err) {
        throw err;
      }
    }
  
    const getlatestClass = async () => {
      try {
        await dispatch(getTypeClassThunk({ type: 'free' })).unwrap();
      } catch (err) {
        throw err;
      }
    }
  
    const getFreeClass = async () => {
      try {
        await dispatch(getTypeClassThunk({ type: 'latest' })).unwrap();
      } catch (err) {
        throw err;
      }
    }
    
    // 온라인, 오프라인, 최신, 무료 클래스 받아오기
    getOnlineClass();
    getOfflineClass();
    getlatestClass();
    getFreeClass();

  }, [dispatch])

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
          <Route path='review' element={<MyReview />}/>
          <Route path='myclass' element={<MyClass />}/>
          <Route path='auth_modify' element={<AuthModify />}/>
          <Route path='modify' element={<Modify />}/>
        </Route>
        <Route path='class' element={<ClassListWrap />}>
          <Route path=':type' element={<ClassList/>} >
            <Route path=':category' element={<ClassList/>} >
            </Route>
          </Route>
        </Route>
        <Route path='product/:classId' element={<ClassDetail/>} />
        <Route path='product/search/:searchValue' element={<ClassSearch/>} />        
        <Route path='*' element={<WrongResult msg='찾을 수 없는 페이지 입니다.'/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
