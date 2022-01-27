import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import styles from './MypageNav.module.css';

const MypageNav = () => {
    const username = useSelector((state) => state.user.name);

    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <nav>
                    <div className={styles.profile}>
                        <img src="" alt="프로필 이미지" />
                        <p className={styles.username}>{username}님</p>
                    </div>
                    <div className={styles.classNav}>
                        <h2>클래스</h2>
                        <Link to='/mypage/wish'>
                            <p className={styles.NavMenu}>나의 찜</p>
                        </Link>
                        <Link to='/mypage/review'>
                            <p className={styles.NavMenu}>나의 후기</p>
                        </Link>
                    </div>
                    <div className={styles.myinfoNav}>
                        <h2>회원정보</h2>
                        <Link to='/mypage/auth_modify'>
                            <p className={styles.NavMenu}>회원정보 수정</p>
                        </Link>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default MypageNav;