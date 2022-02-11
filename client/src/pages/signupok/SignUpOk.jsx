import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import styles from './SignUpOk.module.css'

// 바로 signup_ok에 온 경우 에러 메시지 페이지로 보내기

const SignUpOk = () => {
    let userInfo = useSelector((state) => state.user);
    const { login_id, name } = userInfo;

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}> 시니어 클래스 <br/>회원가입을 축하드립니다.</h1>
            <div className={styles.guideBox}>
                <p>이름 : <strong>{name || "미생성"}</strong></p>
                <p>아이디 : <strong>{login_id || "미생성"}</strong></p>
            </div>
                <div className={styles.btnBox}>
                    <Link to='/'><button className={styles.btn}>홈</button></Link>
                    <Link to='/signin'><button className={styles.btn}>로그인</button></Link>
                </div>
        </div>
    )
}

export default SignUpOk;