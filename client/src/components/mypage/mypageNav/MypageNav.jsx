import { useState } from 'react';
import { useSelector} from 'react-redux';
import CustomLink from '../../common/customLink/CustomLink';
import styles from './MypageNav.module.css';

const MypageNav = () => {
    
    const { nickname,  profile_url } = useSelector((state) => state.user);
    const [ img, setImg ] = useState(profile_url);
    if(!img) {
            setImg('/img/user/default.jpg')
        }


    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <nav>
                    <div className={styles.profile}>
                        <label htmlFor='imgFile' className={styles.profileBox}>
                            <img src={img} alt='프로필 이미지' />
                        </label>
                        <p className={styles.nickname}>{nickname}님</p>
                    </div>
                    <div className={styles.classNav}>
                        <h2>클래스</h2>
                        <CustomLink to='/mypage'>
                            <p className={styles.NavMenu}>나의 찜</p>
                        </CustomLink>
                        <CustomLink to='/mypage/myclass'>
                            <p className={styles.NavMenu}>나의 클래스</p>
                        </CustomLink>
                    </div>
                    <div className={styles.myinfoNav}>
                        <h2>회원정보</h2>
                        <CustomLink to='/mypage/auth_modify'>
                            <p className={styles.NavMenu}>회원정보 수정</p>
                        </CustomLink>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default MypageNav;