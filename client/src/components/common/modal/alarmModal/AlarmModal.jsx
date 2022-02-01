import { BsFillCheckCircleFill } from 'react-icons/bs'
import styles from './AlarmModal.module.css';

const AlarmModal = ({ msg1, msg2, btnNeed, handleCloseModal, requestWithDrawal}) => {

  return (
    <div className={styles.wrapper} >
      <div className={styles.container}>
          <div className={styles.closeBtn} onClick={handleCloseModal}/>
          <div className={styles.containerInner}>
            <BsFillCheckCircleFill className={styles.checkIcon}/>
            <p className={styles.msg}>{ msg2.length > 0 ? msg2 : msg1}</p>
            { 
              btnNeed ?
              <div>
                <button type='button' className={styles.btn} onClick={requestWithDrawal}>예</button>
                <button type='button' className={styles.btn} onClick={handleCloseModal}>아니오</button>
              </div> :
              null
            }
          </div>
      </div>
    </div>
  )
}

export default AlarmModal;