import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './AlarmModal.module.css';

const AlarmModal = ({ msg, handleModalOpen}) => {
  return (
    <div className={styles.wrapper} >
      <div className={styles.container}>
          <div className={styles.closeBtn} onClick={handleModalOpen}/>
          <div className={styles.containerInner}>
            <BsFillCheckCircleFill className={styles.checkIcon}/>
            <p className={styles.msg}>{msg}</p>
          </div>
      </div>
    </div>
  )
}

export default AlarmModal;