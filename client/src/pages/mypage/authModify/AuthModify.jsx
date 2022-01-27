import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import customAxios from '../../../utils/customAxios';
import styles from './AuthModify.module.css';

const ModifyBefore = () => {
    const [ loginInfo, setLoginInfo] = useState({
        login_id: '',
        password: ''
    }) 
    const { login_id, password } = loginInfo;
    const onChangeLoginData = (e) => {
        const { name, value } = e.target;
        setLoginInfo({...loginInfo, [name]: value });
    };

    const [ isLoginErr, setIsErr ] = useState(false);
    const navigate = useNavigate();
    const onClickModify = async (e) => {
        e.preventDefault();
        setIsErr(false);

        try {

            if(login_id === '' || password === '') {
                setIsErr(true);
                return;
            }

            const res = await customAxios({
                method: 'post',
                url: '/mypage/auth/modify',
                data: loginInfo,
                headers: {
                    'Content-Type' : 'application/json'
                }
            });

            if(res.status === 200) {
                setIsErr(false);
                navigate('/mypage/modify');
                return;
            } 

            setIsErr(true);

        } catch (err) {
            console.log(err);
            setIsErr(true);
            throw err;
        }
    };

    return (
        <section className={styles.container}>
            <form className={styles.wrapper} onSubmit={onClickModify}>
                <h2>회원정보 수정</h2>
                <label htmlFor="login_id">아이디</label>
                <input 
                    className={`${styles.input} ${styles.wd_460}`}
                    type="text"  
                    name="login_id"
                    value={login_id || ''}
                    autoComplete="on"
                    onChange={onChangeLoginData}
                />
                <label htmlFor="password" className={styles.password}>비밀번호</label>
                <input
                    className={`${styles.input} ${styles.wd_460}`}
                    type="password"
                    name="password"
                    value={password || ''}
                    autoComplete="on"
                    onChange={onChangeLoginData}
                />
                <div className={styles.btnBox}>
                    {isLoginErr ?
                      <p className={styles.errMsg}>비밀번호가 잘못 입력 되었습니다. 비밀번호를 정확히 입력해 주세요.</p> :
                      null }
                    <button type="submit" className={`${styles.btn} ${styles.wd_460}`}>회원정보 수정</button>
                </div>        
            </form>
        </section>
    )
}

export default ModifyBefore;