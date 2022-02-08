import { useState } from 'react';
import { useSelector} from 'react-redux';
import { CustomMypageLink } from '../../common/customLink/CustomLink';
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
                         <p className={styles.NavMenu}>
                            <CustomMypageLink to='/mypage'>
                            나의 찜
                            </CustomMypageLink>
                        </p>
                        <p className={styles.NavMenu}>
                            <CustomMypageLink to='/mypage/myclass'>
                              나의 클래스 
                            </CustomMypageLink>
                        </p>
                        <p className={styles.NavMenu}>
                            <CustomMypageLink to='/mypage/review'>
                              나의 클래스후기  
                            </CustomMypageLink>
                        </p>
                    </div>
                    <div className={styles.myinfoNav}>
                        <h2>회원정보</h2>
                        <p className={styles.NavMenu}>
                            <CustomMypageLink to='/mypage/auth_modify'>
                                회원정보 수정
                            </CustomMypageLink>
                        </p>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default MypageNav;