import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInThunk } from '../../reducers/api/userApi';
import styles from './SignIn.module.css';

export default function SignIn(){
    const [ loginData, setLoginData ] = useState({
        login_id: '',
        password: ''
    });
    const { login_id, password } = loginData;
    const [ authMsg, setAuthMsg ] = useState('');
    const onChangeLoginData = (e) => {
        const { name, value } = e.target
        setLoginData({...loginData, [name]:value});
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onClickSignin = async (e) => {
        e.preventDefault();
        setAuthMsg('');

        try {
            if(login_id === '' || password === '') {
              setAuthMsg('아이디 또는 비밀번호를 확인해주세요.');
              return;
            }

            await dispatch(signInThunk({ loginData, navigate })).unwrap();
        } catch (err) {
            console.log(err);
            setAuthMsg('아이디 또는 비밀번호를 확인해주세요.');
            throw err;
        }
    }

    return (
        <>
          <div className={styles.wrapper}>
            <div className={styles.wd_460} >
              <h1 className={styles.title}>로그인</h1>
              <form className={styles.signInForm} onSubmit={onClickSignin}>
                    <div className={styles.inputBox}>
                        <label htmlFor="login_id">아이디</label>
                        <input 
                          className={styles.input}
                          type="text"  
                          name="login_id"
                          value={login_id || ''}
                          autoComplete='off'
                          onChange={onChangeLoginData}
                          required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="password">비밀번호</label>
                        <input
                          className={styles.input}
                          type="password"
                          name="password"
                          value={password || ''}
                          autoComplete='off'
                          onChange={onChangeLoginData}
                          required
                        />
                    </div>
                    <p className={`${styles.msg} ${styles.failMsg}`}>{authMsg}</p>
                  <button className={`${styles.signInBtn}`} type="submit">로그인</button>
              </form>
            </div>
          </div>
        </>
    )
}