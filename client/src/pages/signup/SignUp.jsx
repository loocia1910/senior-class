import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { validPassword , isMatchPassword} from '../../utils/validations';
import { validateNickname, validateLoginId } from '../../reducers/api/userApi'

import styles from './SignUp.module.css';


export default function SignUp(){
    const dispatch = useDispatch();
    const [ validLoginId, setValidLoginId ] = useState(false);
    const [ validPwd, setValidPwd ] = useState(false);
    const [ validRePwd, setValidRePwd ] = useState(false);
    const [ validNickname, setValidNickname ] = useState(false);
    const [ userState, setUserState ] = useState({
        login_id: '',
        password: '',
        repassword: '',
        nick_name: '',
        name: '',
        birth: '',
        gender: ''
    });
    
    const { login_id, password, repassword, nickname, name, birth, gender} = userState;

    const onChangUpdateState = (e) => {
      const { name, value } = e.target; // ????? 잘 찍히는지 확인!!!
      setUserState({...userState, [name]: value});
    }
    
    // login_id 유효성 검사
    const onBlurLoginId = async (e) => {
        e.preventDefault();

        try {
            const res = await validateLoginId({login_id});
            if(res.status === 200) setValidLoginId(true);
            else setValidLoginId(false);
        } catch (err) {
            setValidLoginId(false);
            console.log(err);
        }
    }
    
    // password 유효성 검사
    const onBlurPassword = (e) => {
        e.preventDefault();
        if(validPassword(password)) { 
            setValidPwd(true);
            return;
        } else {
            setValidPwd(false);
            return;
        }
    }
    
    // repassword 유효성 검사
    const onBlurRePassword = (e) => {
        e.preventDefault();
        if(isMatchPassword(password, repassword)) { 
            setValidRePwd(true);
            return;
        } else {
            setValidRePwd(false);
            return;
        }
    }

    // nickname 유효성 검사
    const onBlurNickname = async (e) => {
        e.preventDefault();

        try {
          const res = await validateNickname({ nickname });
          if(res.status === 200) setValidNickname(true);
          else setValidNickname(false);

        } catch (err) {
          setValidNickname(false);
          console.log(err);
        }
    }
    
    // 회원가입 버튼 핸들러
    const onClickSignup = async (e) => {
        e.preventDefault();
        try {

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wd_460} >
                <h1 className={styles.title}> 회원가입</h1>
                <form className={styles.signupForm} onSubmit={onClickSignup}>
                    <div>
                        {/* 아이디 */}
                        <div className={styles.inputBox}>
                            <label htmlFor="login_id">아이디</label>
                            <input 
                              className={`${styles.input} ${styles.wd_460}`}
                              type="text"
                              onChange={onChangUpdateState}
                              name='login_id'
                              value={login_id || ''}
                              onBlur={(e) => onBlurLoginId(e)}
                              required
                            />
                            { 
                              login_id === '' ?
                              null :
                              validLoginId ?
                              <p className={`${styles.msg} ${style.successMsg}`}>성공메시지</p> :
                              <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p> 
                            }
                        </div>
                        {/* 비밀번호 */}
                        <div className={styles.inputBox}>
                            <label htmlFor="password">비밀번호</label>
                            <input 
                              className={`${styles.input} ${styles.wd_460}`}
                              type="password"
                              onChange={onChangUpdateState}
                              name='password'
                              value={password || ''}
                              onBlur={(e) => onBlurPassword(e)}
                              required
                            />
                            {
                              password === '' ?
                              null :
                              validPwd ?
                              <p className={`${styles.msg} ${style.successMsg}`}>성공메시지</p> :
                              <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p>
                            }
                        </div>
                        {/* 비밀번호 재입력 */}
                        <div className={styles.inputBox}>
                            <label htmlFor="repassword">비밀번호 재입력</label>
                            <input 
                              className={`${styles.input} ${styles.wd_460}`}
                              type="password"
                              onChange={onChangUpdateState}
                              name='repassword'
                              value={repassword || ''}
                              onBlur={(e) => onBlurRePassword(e)}
                              required
                            />
                            {
                              repassword === '' ?
                              null :
                              validRePwd ?
                              <p className={`${styles.msg} ${style.successMsg}`}>성공메시지</p> :
                              <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p>
                            }
                        </div>
                    </div>
                    <div>
                        {/* 닉네임 */}
                        <div className={styles.inputBox}>
                            <label htmlFor="nickname">닉네임</label>
                            <input 
                              className={`${styles.input} ${styles.wd_460}`}
                              type="text"
                              onChange={onChangUpdateState}
                              name="nickname"
                              value={nickname || ''}
                              onBlur={(e) => onBlurNickname(e)}
                              required
                            />
                            {
                              email === '' ? 
                              null : 
                              validNickname ? 
                              <p className={`${styles.msg} ${style.successMsg}`}>성공메시지</p> :
                              <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p>
                            }
                        </div>
                    </div>
                    <div>
                        <div className={styles.inputBox}>
                            <label htmlFor="">이름</label>
                            <input className={`${styles.input} ${styles.wd_460}`} type="text" />
                        </div>
                        <div className={`${styles.inputBox}`}>
                            <label htmlFor="">생년월일</label>
                            <div className={`${styles.birthBox} ${styles.wd_460}`}>
                                <div><span><input className={styles.input} type="text" id="yy" placeholder="년(4자)" maxLength="4"/></span></div>
                                <div>
                                  <span>
                                    <select name="mm" id="mm">
                                        <option value selected>월</option>
                                        <option value="01">1</option>
                                        <option value="02">2</option>
                                        <option value="03">3</option>
                                        <option value="04">4</option>
                                        <option value="05">5</option>
                                        <option value="06">6</option>
                                        <option value="07">7</option>
                                        <option value="08">8</option>
                                        <option value="09">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                  </span>
                                </div>
                                <div><span><input className={styles.input} type="text" id="dd" placeholder="일" maxLength="2"/></span></div>
                            </div>
                            <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p>
                            <p className={`${styles.msg} ${style.successMsg}`}>성공메시지</p>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="">성별</label>
                            <span className={`${styles.wd_460} ${styles.genderBox}`}>
                                <select  name="gender" id="gender">
                                    <option value selected>성별</option>
                                    <option value="M">남자</option>
                                    <option value="F">여자</option>
                                    <option value="U">선택안함</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <p className={`${styles.msg} ${style.failMsg}`}>실패메시지</p>
                    <button type="submit" className={`${styles.signupBtn} ${styles.wd_460}`}>회원가입</button>
                </form>
            </div>
        </div>
    )
}