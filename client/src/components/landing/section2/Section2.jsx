import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categorys } from './data'
import styles from './Section2.module.css';


const Section2 = () => {
  const boxWidth = 1170;
  const slidesWidth = 2340;
  const [ marginLeft, setMaginLeft ] = useState(0);
  const handlePrevNav = () => {
    setMaginLeft(marginLeft+boxWidth);
    console.log('marginLeft===Prev', marginLeft)
  }
  const handleNextNav = () => {
    setMaginLeft(marginLeft-boxWidth);
    console.log('marginLeft===Next', marginLeft)
    console.log('isEndRight', isEndRight)
  }
  const isEndLeft = marginLeft === 0 
  const isEndRight = marginLeft + (-boxWidth) === -(slidesWidth)

  return (
      <div className={styles.container}>
        <section className={styles.slider}>
            <div className={styles.slides} style={{ marginLeft : `${marginLeft}px` }}>
              {/* <div className={styles.slide}> */}
                {categorys.map((c, idx) =>
                  <div key={idx} className={styles.ctg}>
                    <Link to={`/class/online`}>
                      <div className={styles.ctgIcon}><img src={c.img} alt={c.name} /></div>
                    </Link>
                    <span className={styles.ctgTitle}>{c.name}</span>
                  </div>
                )}
              {/* </div> */}
            </div>
            {/* 전후 네비게이션 */}
            <div className={styles.slidesNav} >
              {
                // margin-left:0이면 이전 네브버튼이 안 보인다
                isEndLeft ?
                null:
                <div 
                  className={`${styles.slidePrev} ${styles.zIndex_10}`}
                  onClick={handlePrevNav} 
                />
              }
              {
                // margin-left에 boxWidth를 한번더 뺀것이 전체 슬라이드 크기와 같은 경우
                // 다음 네브버튼이 안 보인다.
                isEndRight ?
                null:
                <div
                className={`${styles.slideNext} ${styles.zIndex_10}`}
                onClick={handleNextNav} 
              />}
            </div>
            {/* 그라디어트 */}
            {/* <div className={isEndLeft ? "" : `${styles.leftGradiant}`}/>
            <div className={isEndRight ? "" : `${styles.rigthGradiant}`}/>  */}
        </section>
      </div>
  )
}

export default Section2;