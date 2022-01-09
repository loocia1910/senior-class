import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { signUpThunk } from '../../reducers/api/userApi';
import { 
    regExpPassword, 
    isMatchPassword,
    regExpLoginId,
    regExpNickname,
    regExpName
} from '../../utils/validations';
import { serverValidateNickname, serverValidateLoginId } from '../../reducers/api/userApi'

import styles from './SignUp.module.css';


const SignUp = () => {
    const dispatch = useDispatch();
    // 로그인 아이디
    const [ loginIdMsg, setLoginIdMsg ] = useState(null);
    const [ isLoginIdAccepted, setLoginIdAccepted ] = useState(false);
    // 패스워드
    const [ pwdMsg, setPwdMsg ] = useState(null);
    const [ isPwdAccepted, setPwdAccepted ] = useState(false);
    const [ rePwdMsg, setRePwdMsg ] = useState(null);
    const [ isRePwdAccepted, setRePwdAccepted ] = useState(false);
    // 닉네임
    const [ nicknameMsg, setNicknameMsg ] = useState(null);
    const [ isNnameAccepted, setNnameAccepted ] = useState(false);
    // 이름
    const [ nameMsg, setNameMsg ] = useState(null);
    // 생년월일
    const [ validBirthMsg, setValidBirthMsg ] = useState(null);

    // 입력값 상태
    const [ birthState, setBirthState ] = useState({
      yy: '',
      mm: '',
      dd: ''
    });

    const [ userState, setUserState ] = useState({
        login_id: '',
        password: '',
        repassword: '',
        nickname: '',
        name: '',
        birth: '',
        gender: ''
    });

    const { login_id, password, repassword, nickname, name, birth, gender} = userState;
    const { yy, mm, dd } = birthState;


    // 전체 입력값 관리 핸들러
    const onChangUpdateState = (e) => {
      const { name, value } = e.target; 

      if(name === 'yy' || name === 'mm' || name === 'dd') {
        setBirthState({...birthState, [name]: value});
        setUserState({...userState, birth: birthState});
        console.log('birthState', birthState);
        console.log('userState', userState)
        return;
      }

      setUserState({...userState, [name]: value});
    }



    // login_id 유효성 검사
    const onBlurLoginId = async (e) => {
        e.preventDefault();
        setLoginIdAccepted(false);

        try {
            // 입력란이 공백이고 한 번이라도 클릭된 경우
            if( login_id === '') {
                setLoginIdMsg('필수 정보입니다.');
                return;
            }

            // 정규식 조건에 맞지 않는 경우
            if(!regExpLoginId(login_id)) {
                setLoginIdMsg('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
                return;
            }
            
            // 서버와 통신
            const res = await serverValidateLoginId({ login_id });
            // 이미 사용 중인 경우
            if(res.status !== 200) {
              setLoginIdMsg('이미 사용 중인 아이디입니다.');
              return;
            } 

            // 모든 조건에 부합하는 경우
            setLoginIdMsg('사용 가능한 아이디입니다.');
            setLoginIdAccepted(true);
            return;
        } catch (err) {
            setLoginIdMsg(null);
            console.log(err);
        }
    }
    
    // 비밀번호: 8~16자 영문 대 소문자, 숫자, 특수문자 사용합니다.
    // password 유효성 검사
    const onBlurPassword = (e) => {
        e.preventDefault();
        setPwdAccepted(false);

        // 아무런 값이 입력되지 않았을 때
        if(password === '') {  
          setPwdMsg('필수 정보입니다.');
          return;
        }

        if(!regExpPassword(password)) { 
            setPwdMsg('8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.');
            return;
        }

        setPwdMsg('사용 가능한 비밀번호입니다.');
        setPwdAccepted(true);
        return;
    }
    
    // repassword 유효성 검사
    const onBlurRePassword = (e) => {
        e.preventDefault();
        setRePwdAccepted(false);

        if(repassword === '') {
          setRePwdMsg('필수 정보입니다.');
          return;
        }

        if(!isMatchPassword(password, repassword)) { 
            setRePwdMsg('비밀번호가 불일치합니다.');
            return;
        } 
        
        setRePwdMsg('비밀번호가 일치합니다.');
        setRePwdAccepted(true);
        return;
    }

    // nickname 유효성 검사
    const onBlurNickname = async (e) => {
        console.log('닉네임', e)
        e.preventDefault();
        setNnameAccepted(false);

        try {
          if(nickname === '') {
            setNicknameMsg('필수 정보입니다.');
            return;
          }

          // 정규식 조건에 맞지 않는 경우
          if(!regExpNickname(nickname)) {
            setNicknameMsg('3~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
            return;
          }

          // 서버 통신 
          const res = await serverValidateNickname({ nickname });
          if(res.status !== 200) {
              setNicknameMsg('이미 사용 중인 아이디입니다.');
              return;
          }

          setNicknameMsg('사용 가능한 아이디입니다.');
          setNnameAccepted(true);
          return;

        } catch (err) {
          setNicknameMsg(null);
          console.log(err);
        }
    }

    // name onBlur
    const onBlurname = (e) => {
        e.preventDefault();
        setNameMsg(null);

      if(name === '') {
        setNameMsg('필수 정보입니다.');
        return;
      }
      if(!regExpName(name)) {
        setNameMsg("한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)");
        return;
      }
    }
    
    const isEmpty = login_id === '' || 
                    password === '' ||
                    repassword === '' ||
                    nickname === '' ||
                    name === '' ||
                    birth === '' ||
                    gender === '' || 
                    yy === '' || 
                    mm === '' ||
                    dd === '';

    // 회원가입 버튼 핸들러
    const onClickSignup = async (e) => {
        e.preventDefault();
        console.log('===========', userState)
        try {
         // 빈 칸이 있는 경우
         if(isEmpty) return;
         
         // 모든 조건을 충족시키지 못한 경우
         if( 
             !isLoginIdAccepted ||
             !isPwdAccepted ||
             !isRePwdAccepted ||
             !isNnameAccepted ||
             nameMsg !== null
        ) {
             return;
         }

         // 회원가입 데이터 서버로 보내기
         await dispatch(signUpThunk({formData: userState})).unwrap();
         // 승인  
         alert('회원가입 성공!');
        } catch (err) {
            // 미승인
            console.log(err);
            throw err;
        }
    }

    const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    return (
      <>
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
                              autocomplete='off'
                            />
                            { 
                              <p className={
                                  isLoginIdAccepted ?
                                  `${styles.successMsg}`:
                                  `${styles.failMsg}`}
                              >
                                {loginIdMsg}
                              </p> 
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
                            />
                              <p className={
                                  isPwdAccepted ?
                                  `${styles.successMsg}`:
                                  `${styles.failMsg} `}
                              >
                                {pwdMsg}
                              </p> 
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
                              autocomplete='off'
                            />
                            <p className={
                                isRePwdAccepted ?
                                `${styles.successMsg}`:
                                `${styles.failMsg}`}
                            >
                              {rePwdMsg}
                            </p> 
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
                              autocomplete='off'
                            />
                            <p className={
                              isNnameAccepted ?
                              `${styles.successMsg}` :
                              `${styles.failMsg}`
                            }
                            >
                              {nicknameMsg}
                            </p> 
                        </div>
                    </div>
                    <div>
                        {/* 이름 */}
                        <div className={styles.inputBox}>
                            <label htmlFor="name">이름</label>
                            <input 
                              className={`${styles.input} ${styles.wd_460}`} 
                              type="text"
                              onChange={onChangUpdateState}
                              name="name"
                              value={name || ''}
                              onBlur={(e) => onBlurname(e)}
                              autocomplete='off'
                            />
                            <p className={styles.failMsg}>{nameMsg}</p>
                        </div>
                        {/* 생년월일 */}
                        <div className={`${styles.inputBox}`}>
                            <label htmlFor="birth">생년월일</label>
                            <div className={`${styles.birthBox} ${styles.wd_460}`}>
                                {/* 년 */}
                                <div>
                                    <span>
                                        <input
                                            className={styles.input}
                                            name="yy"
                                            vlaue={yy || ''}
                                            type="text"
                                            onChange={onChangUpdateState}
                                            placeholder="년(4자)"
                                            autocomplete='off'
                                            maxLength="4"
                                        />
                                    </span>
                                </div>
                                {/* 월 */}
                                <div>
                                    <span>
                                        <select
                                            name="mm"
                                            value={mm || ''}
                                            onChange={onChangUpdateState}
                                            >
                                            <option value selected>월</option>
                                            {month.map((m, idx) => 
                                              <option key={idx} value={m}>{m}</option>
                                              )}
                                        </select>
                                    </span>
                                </div>
                                {/* 일 */}
                                <div>
                                    <span>
                                    <input
                                            className={styles.input}
                                            name="dd"
                                            vlaue={dd || ''}
                                            type="text"
                                            onChange={onChangUpdateState}
                                            placeholder="일"
                                            autocomplete='off'
                                            maxLength="2"
                                        />
                                    </span>
                                </div>
                            </div>
                            <p className={`${styles.msg} ${styles.failMsg}`}>{validBirthMsg}</p>
                        </div>
                        <div className={styles.inputBox}>
                            <label htmlFor="gender">성별</label>
                            <span className={`${styles.wd_460} ${styles.genderBox}`}>
                                <select 
                                  name="gender"
                                  vlaue={gender || ''}
                                  onChange={onChangUpdateState}
                                >
                                    <option value selected>성별</option>
                                    <option value="M">남자</option>
                                    <option value="F">여자</option>
                                    <option value="U">선택안함</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <p className={`${styles.msg} ${styles.failMsg}`}>모든 칸이 입력되지 않을 시 실패메시지</p>
                    <button type="submit" className={`${styles.signupBtn} ${styles.wd_460}`}>회원가입</button>
                </form>
            </div>
        </div>
     </>
    )
}

export default SignUp;