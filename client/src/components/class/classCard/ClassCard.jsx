import styles from './ClassCard.module.css';

const ClassCard = ({teacherName, className, price, discount, img, region}) => {
  return (
      <div className={styles.container}>
          <div className={styles.imgBox}>
              {/* <img src="" alt="00" /> */}
            </div>
          <div className={styles.classInfoBox}>
              {!!region ? <span className={styles.region}>{region}</span> : null}
              <span className={styles.teacherName}>{teacherName}</span>
              <p className={styles.className}>{className}</p>
              <span className={styles.discount}>{discount}</span><span className={styles.percentTxt}>%</span>
              <span className={styles.price}>{price}</span><span>원</span>
              <span className={styles.month}>(3개월)</span>
          </div>
      </div>
  )
}

export default ClassCard;