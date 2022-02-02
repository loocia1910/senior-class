import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { 
    regExpPassword, 
    isMatchPassword,
    regExpLoginId,
    regExpNickname,
    regExpName
} from '../../utils/validations';
import { signUpThunk, 
         serverValidateNickname,
         serverValidateLoginId 
} from '../../reducers/api/userApi'
import styles from './SignUp.module.css';



const SignUp = () => {

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
    const [ nameMsg, setNameMsg ] = useState('');
    // 생년월일
    const [ validBirthMsg, setValidBirthMsg ] = useState('');
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
        gender: '성별'
    });
    const { login_id, password, repassword, nickname, name,  gender} = userState;
    const { yy, mm, dd } = birthState;
    // 입력값 상태 메시지
    const [ totalMag, setTotalMsg ] = useState('');


    // **전체 입력값 관리 핸들러**
    const onChangUpdateState = (e) => {
      const { name, value } = e.target; 

      if(name === 'yy' || name === 'mm' || name === 'dd') {
        setBirthState({...birthState, [name]: value});
        return;
      }
      
      setUserState({...userState, [name]: value});
    }

    // login_id 
    const onBlurLoginId = async (e) => {
        e.preventDefault();
        setLoginIdAccepted(false);
        setLoginIdMsg('');

        try {
            if( login_id === '') {
                setLoginIdMsg('필수 정보입니다.');
                return;
            }

            if(!regExpLoginId(login_id)) {
                setLoginIdMsg('5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
                return;
            }

            await serverValidateLoginId({ login_id });
            setLoginIdMsg('사용 가능한 아이디입니다.');
            setLoginIdAccepted(true);
            return;

          } catch (err) {
              if(err.response.status === 409) {
                setLoginIdMsg('이미 사용 중인 아이디입니다.');
                return;
              } 
             console.log(err);
        }
    }
    
    // password 
    const onBlurPassword = (e) => {
        e.preventDefault();
        setPwdAccepted(false);

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
    
    // repassword
    const onBlurRePassword = (e) => {
        e.preventDefault();
        setRePwdAccepted(false);
        setRePwdMsg('');

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

    // nickname 
    const onBlurNickname = async (e) => {
        e.preventDefault();
        setNnameAccepted(false);
        setNicknameMsg('');

        try {
          if(nickname === '') {
            setNicknameMsg('필수 정보입니다.');
            return;
          }

          if(!regExpNickname(nickname)) {
            setNicknameMsg('3~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.');
            return;
          }

          // 서버 통신 
          await serverValidateNickname({ nickname });

          setNnameAccepted(true);
          setNicknameMsg('사용 가능한 닉네임입니다.');
          return;

        } catch (err) {
            if(err.response.status === 409) {
              setNicknameMsg('이미 사용 중인 닉네임입니다.');
              return;
            } 
             console.log(err);
        }
    }

    // name 
    const onBlurname = (e) => {
        e.preventDefault();
        setNameMsg('');

      if(name === '') {
        setNameMsg('필수 정보입니다.');
        return;
      }
      if(!regExpName(name)) {
        setNameMsg("한글과 영문 대 소문자를 사용하세요. (특수기호, 공백 사용 불가)");
        return;
      }
    }
    
    // birth 
    const onBlurBirth = (e) => {
      e.preventDefault();
      setValidBirthMsg('');

      const { name, value } = e.target;
      const val = Number(value);

      if( typeof val !== 'number' || val === 0 || ( name === 'dd' && val >= 32 ) ) {
          setValidBirthMsg('생년월일을 다시 확인해주세요.');
          return;
      }

      if(name === 'yy') {
        if(value.length !== 4) {
          setValidBirthMsg('태어난 년도 4자리를 정확하게 입력해주세요.');
          return;
        } else if (val < 1910 ) {
          setValidBirthMsg('정말이세요?');
          return;
        }
      }

      setUserState({...userState, birth: birthState});
    }
    
    
    const isEmpty = login_id === '' || 
                    password === '' ||
                    repassword === '' ||
                    nickname === '' ||
                    name === '';
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 회원가입 버튼
    const onClickSignup = async (e) => {
        e.preventDefault();
        setTotalMsg(''); 

        try {
          
          if( isEmpty ||
              !isLoginIdAccepted ||
              !isPwdAccepted ||
              !isRePwdAccepted ||
              !isNnameAccepted ||
              nameMsg.length < 0 
          ) { 
            setTotalMsg('입력란을 확인 해주세요.'); 
            return;
          } 

         await dispatch(signUpThunk({userState, navigate})).unwrap();
        } catch (err) {
          console.log(err);
          throw err;
        }
    }



    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

    
    return (
      <div className={styles.wrapper}>
          <div className={styles.wd_460} >
              <h1 className={styles.title}> 회원가입</h1>
              <form className={styles.signupForm} onSubmit={onClickSignup}>
                  <div>
                    <span className={styles.requiredTxt}>* 항목은 필수 입력입니다.</span>
                      {/* 아이디 */}
                      <div className={styles.inputBox}>
                          <label htmlFor="login_id">아이디 <span className={styles.requiredSym}>*</span></label>
                          <input 
                            className={`${styles.input}`}
                            type="text"
                            onChange={onChangUpdateState}
                            name='login_id'
                            value={login_id || ''}
                            onBlur={(e) => onBlurLoginId(e)}
                            autoComplete='off'
                          />
                          <p className={
                              isLoginIdAccepted ?
                              `${styles.successMsg}`:
                              `${styles.failMsg}`}
                          >
                            {loginIdMsg}
                          </p> 
                      </div>
                      {/* 비밀번호 */}
                      <div className={styles.inputBox}>
                          <label htmlFor="password">비밀번호 <span className={styles.requiredSym}>*</span></label>
                          <input 
                            className={`${styles.input}`}
                            type="password"
                            onChange={onChangUpdateState}
                            name='password'
                            value={password || ''}
                            onBlur={(e) => onBlurPassword(e)}
                            autoComplete='off'
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
                          <label htmlFor="repassword">비밀번호 재입력 <span className={styles.requiredSym}>*</span></label>
                          <input 
                            className={`${styles.input}`}
                            type="password"
                            onChange={onChangUpdateState}
                            name='repassword'
                            value={repassword || ''}
                            onBlur={(e) => onBlurRePassword(e)}
                            autoComplete='off'
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
                          <label htmlFor="nickname">닉네임 <span className={styles.requiredSym}>*</span></label>
                          <input 
                            className={`${styles.input}`}
                            type="text"
                            onChange={onChangUpdateState}
                            name="nickname"
                            value={nickname || ''}
                            onBlur={(e) => onBlurNickname(e)}
                            autoComplete='off'
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
                          <label htmlFor="name">이름 <span className={styles.requiredSym}>*</span></label>
                          <input 
                            className={`${styles.input}`} 
                            type="text"
                            onChange={onChangUpdateState}
                            name="name"
                            value={name || ''}
                            onBlur={(e) => onBlurname(e)}
                            autoComplete='off'
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
                                          onBlur={onBlurBirth}
                                          placeholder="년(4자)"
                                          autoComplete='off'
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
                                          onBlur={onBlurBirth}
                                          >
                                          <option value="">월</option>
                                          {months.map((m, idx) => 
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
                                          onBlur={onBlurBirth}
                                          placeholder="일"
                                          autoComplete='off'
                                          maxLength="2"
                                      />
                                  </span>
                              </div>
                          </div>
                          <p className={`${styles.failMsg}`}>{validBirthMsg}</p>
                      </div>
                      <div className={styles.inputBox}>
                          <label htmlFor="gender">성별</label>
                          <span className={`${styles.wd_460} ${styles.genderBox}`}>
                              <select 
                                name="gender"
                                vlaue={gender || ''}
                                onChange={onChangUpdateState}
                              >
                                  <option value="성별" >성별</option>
                                  <option value="M">남자</option>
                                  <option value="F">여자</option>
                                  <option value="U">선택안함</option>
                              </select>
                          </span>
                      </div>
                  </div>
                  <p className={`${styles.msg} ${styles.failMsg}`}>{totalMag}</p>
                  <button type="submit" className={`${styles.signupBtn} ${styles.wd_460}`}>회원가입</button>
              </form>
          </div>
      </div>
    )
}

export default SignUp;