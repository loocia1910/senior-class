import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Modify.module.css';
import { modifyThunk } from '../../../reducers/api/userApi';
import customAxios from '../../../utils/customAxios';
import { 
    regExpPassword, 
    isMatchPassword,
    regExpNickname,
} from '../../../utils/validations';
import { serverValidateNickname} from '../../../reducers/api/userApi';
import AlarmModal from '../../../components/common/modal/alarmModal/AlarmModal'; 


const Modify = () => {

    const login_id = useSelector((state) => state.user.login_id);
    const [ inputData, setInputData ] = useState({
        nickname: '',
        password: '',
        repassword: ''
    });

    const { nickname, password, repassword } = inputData;

    // 패스워드
    const [ pwdMsg, setPwdMsg ] = useState(null);
    const [ isPwdAccepted, setPwdAccepted ] = useState(false);
    const [ rePwdMsg, setRePwdMsg ] = useState(null);
    const [ isRePwdAccepted, setRePwdAccepted ] = useState(false);
    // 닉네임
    const [ nicknameMsg, setNicknameMsg ] = useState(null);
    const [ isNnameAccepted, setNnameAccepted ] = useState(false);

    const onChangeData = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData , [name]:value})
    }

    // password
    const onBlurPassword = (e) => {
        e.preventDefault();
        setPwdAccepted(false);

        if(password === '') {  
          setPwdMsg('');
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

            if(nickname.length === 0) {
                setNicknameMsg('')
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

    // 모달 상태 관리 modalMsg
    const [ isModalOpen, setIsModalOpen ] = useState(true); 
    const [ modalMsg, setModalMsg] = useState(''); 
    const handleModalOpen = () => {
        setIsModalOpen(!isModalOpen);
    };

    // 회원 정보 수정 버튼
    const dispatch = useDispatch();
    const onClickModify = async () => {

        try {
            if( (isNnameAccepted === false && isPwdAccepted === false) ||
                (isNnameAccepted === false && isRePwdAccepted === false) ||
                (isPwdAccepted === true && isRePwdAccepted === false)
            ) {
                return;
            }

            let formData = { login_id, nickname, password }
            await dispatch(modifyThunk({ formData })).unwrap();
            
            setIsModalOpen(true);
            setModalMsg("회원정보가\n성공적으로 변경되었습니다.")
            
        } catch (err) {
            console.log('errrrrrrrrrrr---------', err)
            throw err
        }
    }


    // 회원탈퇴 관련
    const [ isWithDrawal, setIsWithDrawal ] = useState(false);

    return (
        <section className={styles.container}>
            <form className={styles.wrapper} >
                <h2>회원정보 수정</h2>
                <div className={styles.inputBox}>
                    <label>아이디</label>
                    <strong>{login_id}</strong>
                </div>             
                <div className={styles.inputBox}>
                    <label htmlFor="nickname">닉네임</label>
                    <input
                        className={`${styles.input} ${styles.wd_460}`}
                        type="text"
                        name="nickname"
                        value={nickname || ''}
                        autoComplete="on"
                        onChange={onChangeData}
                        onBlur={(e) => onBlurNickname(e)}
                    />
                    <p className={isNnameAccepted ?`${styles.successMsg}` :`${styles.failMsg}`}>
                        {nicknameMsg}
                    </p>                     
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="password" >비밀번호</label>
                    <input
                        className={`${styles.input}`}
                        type="password"
                        name="password"
                        value={password || ''}
                        autoComplete="on"
                        onChange={onChangeData}
                        onBlur={(e) => onBlurPassword(e)}
                    />
                    <p className={isPwdAccepted ?`${styles.successMsg}`:`${styles.failMsg}`}>
                        {pwdMsg}
                    </p> 
                    <label htmlFor="password" className={styles.repassword} >비밀번호 재입력</label>
                    <input
                        className={`${styles.input}`}
                        type="password"
                        name="repassword"
                        value={repassword || ''}
                        autoComplete="on"
                        onChange={onChangeData}
                        onBlur={(e) => onBlurRePassword(e)}
                    />
                    <p className={isRePwdAccepted ?`${styles.successMsg}`:`${styles.failMsg}`}>
                        {rePwdMsg}
                    </p> 
                </div>
                <div className={styles.btnBox}>
                    {/* {isLoginErr ?
                      <p className={styles.errMsg}>비밀번호가 잘못 입력 되었습니다. 비밀번호를 정확히 입력해 주세요.</p> :
                      null } */}
                    <button type="button"  onClick={onClickModify} className={`${styles.btn} ${styles.wd_460}`}>회원정보 수정</button>
                </div>        
            </form>
            <button className={styles.withDrawal}>회원탈퇴</button>
            {/* {isModalOpen ? 
            <AlarmModal 
              msg={modalMsg}
              handleModalOpen={handleModalOpen}
            /> :
            null} */}
        </section>
    )
}

export default Modify;