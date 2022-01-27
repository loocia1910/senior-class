import { Outlet } from 'react-router';
import MypageNav from '../../components/mypage/mypageNav/MypageNav';
import styles from './Mypage.module.css';

const Mypage = () => {

    return (
        <div className={styles.wrapper}>
            마이페이지 홈
            <MypageNav />
            <Outlet />
        </div>
    )
}

export default Mypage;