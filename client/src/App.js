import { Routes, Route} from 'react-router-dom';
import Header from './components/common/header/Header';
import Landing from './pages/landing/Landing';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';

// app에서 path(또는 page)를 하나하나 만든다고 생각하면 된다

function App() {
  return (
    <>
      <Routes path="/" element={<Header />}>
        <Route index element={<Landing />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
