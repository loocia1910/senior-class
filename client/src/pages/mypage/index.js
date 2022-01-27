import { Outlet } from 'react-router';
import MypageNav from '../../components/mypage/mypageNav/MypageNav';
import styles from './Mypage.module.css';

const Mypage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>마이페이지</h2>
                <section>
                    <MypageNav/>
                    <Outlet />
                </section>
            </div>
        </div>
    )
}

export default Mypage;