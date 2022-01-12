import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactModal.module.css';

const ContactModal = ({ isOpenHandler, isOpen }) => {
    const [ msg, setMsg ] = useState({
        name: '',
        contact: '',
        massage: ''
    });
    const { name, contact, message } = msg;
    const onChangeMsg = (e) => {
     const {name, value} = e.target;
     setMsg({...msg, [name]: value});
    };

    const [ isSent, setIsSent ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isBtnClidked, setIsBtnClidked ] = useState(false);
    const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.REACT_APP_EMAILJS_USER_ID;

    const form = useRef();

    const sendEmail = (e) => {

        e.preventDefault();
        setIsBtnClidked(true);
        setIsLoading(true);
        emailjs.sendForm( service_id, template_id, form.current, user_id)
        .then((res) => { 
            console.log(res.status, res.text);
            setIsSent(true);
            setIsLoading(false);
        }, (err) => {
            console.log(err.text);
            setIsSent(false);
        })

    }

    return (
        <>
        {isOpen ?
        <div className={styles.wrapper} >
            <div className={styles.container}>
                <div className={styles.closeBtn} onClick={isOpenHandler}></div>
                <div className={styles.containerInner}>
                    {/* 이메일 보내기 버튼이 클릭되고, 메시지 전송 성공 */}
                    {/* 이메일 보내기 버튼이 클릭되고, 메시지 전송 실패 */}
                    {  
                      isLoading ?
                      null :
                      isBtnClidked && isSent ? 
                      <h3>메세지가 성공적으로 보내졌습니다.</h3> : 
                      isBtnClidked && !isSent ?
                      <h3>메세지 전달에 실패하였습니다.</h3> :
                      null
                    }
                    {/* 이메일 보내기 버튼을 아직 안 눌렀을 때*/}
                    {!isBtnClidked ? 
                    <form ref={form} onSubmit={sendEmail}>
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="name">Name  </label>
                            <input 
                              className={styles.input}
                              type="text"
                              name="name"
                              value={name} 
                              onChange={onChangeMsg}
                              placeholder="성함이나 회사명을 남겨주세요."
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="contact">Contact  </label>
                            <input
                              className={styles.input}
                              type="text" 
                              name="contact"
                              value={contact}
                              onChange={onChangeMsg}
                              placeholder="이메일 주소나 연락처를 남겨주세요."
                            />
                        </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="message">Message </label>
                            <textarea
                              className={styles.input}
                              type="text"
                              name="message"
                              value={message} 
                              onChange={onChangeMsg}
                              placeholder="메세지를 남겨주세요."
                            />
                        </div>
                        <p>아래 버튼을 클릭하시면 loocia1910@gmail.com로 이메일이 보내집니다.</p>
                        <p>이메일 확인하는 즉시 답변드리겠습니다. 제 포트폴리오에 관심 주셔서 감사합니다.😊</p>
                        <button type="submit" className={styles.btn}>이메일 보내기</button>
                    </form> :
                    // 이메일 전송 중일 때
                    isLoading ? 
                    <p>귀하의 메세지를 loocia1910@gmail.com로 전송 중입니다...</p> :
                    // 이메일 전송 성공
                    isBtnClidked && isSent ?
                    <div>
                        <p><br/>다음 내용이 loocia1910@gmail.com로 전송되었습니다.</p>
                        <div className={styles.successMsg}>
                            <span className={styles.msgTitle}>Name</span>
                            <p>{name}</p>
                            <span className={styles.msgTitle}>Contact</span>
                            <p>{contact}</p>
                            <span className={styles.msgTitle}>Message</span>
                            <p>{message}</p>
                        </div>
                        <button type="button" className={styles.btn} onClick={isOpenHandler}>닫기</button>
                    </div> :
                    // 이메일 전송 실패 또는 이메일 전송 버튼 누르지 않았을 경우
                    null }
                </div>
            </div>
        </div> 
        : null }
        </>

    )
}

export default ContactModal;