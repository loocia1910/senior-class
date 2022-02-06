import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import AlarmModal from '../../components/common/modal/alarmModal/AlarmModal';
import styles from './TeacherApply.module.css';


export default function TeacherApply(){
    const [ teacherData, setTeacherData ] = useState({
        fake_teacher_name: '',
        phone: '',
        category: '',
        contents: ''
    });
    const { fake_teacher_name, phone, category, contents } = teacherData;
    const onChangeTeacherData = (e) => {
        const { name, value } = e.target;
        setTeacherData({...teacherData, [name]: value });
    };
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

    const form = useRef();

    // 모달 상태
    const [ isModalOpen, setIsModalOpen ] = useState(false); 
    const [ modalMsg, setModalMsg ] = useState(''); 
    // 모달 X 버튼
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const sendEmail = (e) => {
        setIsModalOpen(true);
        setModalMsg('로딩 중...');
        e.preventDefault();
        emailjs.sendForm( service_id, template_id, form.current, user_id)
        .then((res) => { 
            console.log('res====', res)
            setModalMsg('강사지원이 성공적으로 완료되었습니다.');
            window.location.reload(); 
        }, (err) => {
            console.log('err----', err.text);
            setModalMsg('강사지원 요청에 실패하였습니다.');
            window.location.reload(); 
        })
    }

    

    return (
        <>
          <div className={styles.wrapper}>
            <div className={styles.wd_460} >
              <h1 className={styles.title}>강사지원</h1>
              <p className={styles.subtitle}>오픈하고자 하는 클래스에 대한 간단한 정보를 남겨 주세요.</p>
              <span className={styles.sub}>영업일 기준 3~5일 이내에 연락 드리겠습니다.</span>
              <form ref={form} className={styles.form} onSubmit={sendEmail}>
                    <div className={styles.inputBox}>
                        <label htmlFor="fake_teacher_name">성함을 작성해주세요.</label>
                        <input 
                          className={styles.input}
                          type="text"  
                          name="fake_teacher_name"
                          value={fake_teacher_name || ''}
                          autoComplete='off'
                          placeholder='성함을 작성해주세요.'
                          onChange={onChangeTeacherData}
                          required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="phone">연락처를 작성해주세요.</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="phone"
                          placeholder='여기에 작성하신 연락처로 연락드립니다.'
                          value={phone || ''}
                          autoComplete='off'
                          onChange={onChangeTeacherData}
                          required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="category">원하는 클래스의 주제를 작성해주세요.</label>
                        <input
                          className={styles.input}
                          type="text"
                          name="category"
                          placeholder='예시) 건강한 제철 반찬 만들기, 수묵화 그리기, 노후 설계하기 ... 등등'
                          value={category || ''}
                          autoComplete='off'
                          onChange={onChangeTeacherData}
                          required
                        />
                    </div>
                    <div className={styles.inputBox}>
                        <label htmlFor="contents">원하는 클래스에 대한 간단한 설명을 작성해주세요.</label>
                        <textarea
                          className={styles.input}
                          type="text"
                          name="contents"
                          placeholder='예시) 몸에 좋은 재료(쑥, 두릅, 비트 등)의 효능을 소개하고, 그 재료를 이용하여 제철 밑반찬을 요리하는 강의입니다.'
                          value={contents || ''}
                          autoComplete='off'
                          onChange={onChangeTeacherData}
                          required
                        />
                    </div>
                  <button className={`${styles.Btn}`} type="submit">강사지원</button>
              </form>
              {isModalOpen ? 
                <AlarmModal 
                    msg1={modalMsg}
                    handleCloseModal={handleCloseModal}
                /> :
                null}
            </div>
          </div>
        </>
    )
}