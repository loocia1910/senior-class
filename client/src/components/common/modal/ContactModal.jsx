import styles from './ContactModal.module.css';

const ContactModal = ({isOpenHandler}) => {
    
    return (
        <div className={styles.wrapper} >
            컨텍트 모달
            <div className={styles.container}>
                <div className={styles.closeBtn} onClick={isOpenHandler}></div>
                <div className={styles.containerInner}>
                    <form action="" >
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="name">Name  </label>
                            <input className={styles.input} type="text" name="name" placeholder="성함이나 회사명을 남겨주세요."  />
                        </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="contact">Contact  </label>
                            <input className={styles.input} name="contact" type="text" placeholder="이메일 주소나 연락처를 남겨주세요."/>
                        </div>
                        <div className={styles.inputBox}>
                            <label className={styles.label} htmlFor="message">Message </label>
                            <textarea className={styles.input} name="message" type="text" placeholder="메세지를 남겨주세요."/>
                        </div>
                        <p>아래 버튼을 클릭하시면 loocia1910@gmail.com으로 이메일이 보내집니다.</p>
                        <p>이메일 확인하는 즉시 답변드리겠습니다. 제 포트폴리오에 관심 주셔서 감사합니다.😊</p>
                        <button className={styles.btn}>이메일 보내기</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactModal;