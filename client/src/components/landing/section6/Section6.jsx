import { Link } from 'react-router-dom'
import styles from './Section6.module.css'

const Section6 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.txtBox}>
          <p className={styles.logo}>Senior Class</p>
          <h2 className={styles.txt}>시니어 클래스는<br/> 언제나 시니어의 청춘을 응원합니다.</h2>
          <button className={styles.Btn}><Link to='/class/online'>클래스 둘러보기</Link></button>
        </div>
      </section>
    </div>
  )
}

export default Section6;