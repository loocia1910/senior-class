import ClassCard from '../../class/classCard/ClassCard';
import styles from './Section3.module.css'


// 온라인 추천 클래스
const Section3 = () => {
  const data = [
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
    {
      teacherName : '강사명',
      className : '클래스명',
      price : '22,000',
      discount: '15'
    },
  ]
  
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
          <h2 className={styles.title}>온라인 추천 클래스</h2>
          <span className={styles.moreClass}>온라인 클래스 더보기 + </span>
          <div className={styles.classCardBox}>
            {data.map((c,idx) =>
              <div className={styles.card}>
                <ClassCard
                  key={idx}
                  teacherName={c.teacherName}
                  cName={c.className}
                  price={c.price}
                  discount={c.discount}
                />
              </div>
            )}
          </div>
      </section>
    </div>
  )
}

export default Section3;