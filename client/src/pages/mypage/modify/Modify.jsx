import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Modify.module.css';
import { 
    modifyThunk,
    withdrawalThunk,
    profileImgThunk
} from '../../../reducers/api/userApi';
import { 
    regExpPassword, 
    isMatchPassword,
    regExpNickname,
} from '../../../utils/validations';
import { serverValidateNickname} from '../../../reducers/api/userApi';
import AlarmModal from '../../../components/common/modal/alarmModal/AlarmModal'; 


const Modify = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            throw err;
        }
    }


    // 회원 정보 수정 버튼
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
            setModalMsg1("회원정보가\n성공적으로 변경되었습니다.")
            
        } catch (err) {
            setIsModalOpen(false);
            setModalMsg1("");
            throw err;
        }
    }

    // 모달 상태 관리
    const [ isModalOpen, setIsModalOpen ] = useState(false); 
    const [ modalMsg1, setModalMsg1] = useState(''); 
    const [ modalMsg2, setModalMsg2] = useState('');
    const [ btnNeed, setBtnNeed ] = useState(false);  
    // 회원탈퇴 예, 아니오 버튼
    const handleBtnExist = (b) => {
        setBtnNeed(b);
    };
    // 회원탈퇴 예, 아니오
    const [ isWithDrawal, setIsWithDrawal ] = useState(false);
    // 회원탈퇴 요청
    const requestWithDrawal = async () => {
        try {
            setIsWithDrawal(true);
            handleBtnExist(false);
            // 회원탈퇴
            await dispatch(withdrawalThunk({})).unwrap();
            // msg2
            setModalMsg2('회원탈퇴가 성공적으로 완료되었습니다.');

        } catch (err) {
            setIsWithDrawal(false);
            setModalMsg2('회원탈퇴 오류');
            handleBtnExist(false);
            throw err;
        }
    }
    // 회원탈퇴 버튼
    const onClickWithDrawal = () => {
        handleBtnExist(true);
        setModalMsg1('회원탈퇴 시 모든 데이터가 사라집니다.\n정말로 회원탈퇴 하시겠습니까?');
        setIsModalOpen(true);
    }

    // 모달 X 버튼
    const handleCloseModal = (e) => {
        let cname = e.target.className;
        let isCloseBtn = cname.includes('closeBtn');
        setIsModalOpen(false);
        if(isCloseBtn && isWithDrawal) {
            navigate('/');
            return;
        }
        if(isCloseBtn) {
            window.location.reload(); //입력된 인풋값 클리어
        }
    };

    // 프로필 이미지 변경
    const [ profileImg, setProfileImg ] = useState()

    const uploadProfile = async (e) => {
        const profile = e.target.files[0];
        setProfileImg(profile);
    }
    
    const profileSubmit = async (e) => {
        e.preventDefault();
        // 서버 '/profile'로 요청을 보낸다.
        // formidable로 파일을 받아 임시저장
        // aws에 저장
        // 저장된 url DB에 저장
        // 저장된 url을 리턴한다
        // user slice에서 응답으로 받은 url을 새로 저장
        try {
            // console.log('profileImg', profileImg);
            const formData = new FormData();
            formData.append('profile', profileImg);
            formData.append('login_id', login_id);
            await dispatch(profileImgThunk({ formData }));
            window.location.reload();
        } catch (err) {
            throw err;
        }
    }


    return (
        <section className={styles.container}>
            <h2>회원정보 수정</h2>
            <div className={styles.inputBox}>
                <label>아이디</label>
                <strong>{login_id}</strong>
            </div>
            <form className={styles.inputBox} onSubmit={profileSubmit}>
                <label >프로필 이미지 변경</label>
                <label htmlFor='imgFile' className={styles.profileLabel}>파일선택</label>
                <input type='file' name='userfile' id='imgFile' accept='image/*' onChange={e => uploadProfile(e)} className={styles.fileInput} />
                <label htmlFor='submitBtn' className={styles.profileLabel}>변경하기</label>
                <input id='submitBtn' type="submit" className={styles.profileSubmit}/>
            </form>             
            <form className={styles.wrapper} >
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
                    <button type="button"  onClick={onClickModify} className={`${styles.btn} ${styles.wd_460}`}>회원정보 수정</button>
                </div>        
            </form>
            <div className={styles.withDrawal} onClick={onClickWithDrawal}>회원탈퇴</div>
            {isModalOpen ? 
            <AlarmModal 
              msg1={modalMsg1}
              msg2={modalMsg2 || ''}
              btnNeed={btnNeed || false}
              handleCloseModal={handleCloseModal}
              requestWithDrawal={requestWithDrawal}
            /> :
            null}
        </section>
    )
}

export default Modify;