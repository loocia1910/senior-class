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
          <div className={styles.classCard}>
            {data.map((c) =>
              <ClassCard
                teacherName={c.teacherName}
                className={c.className}
                price={c.price}
                discount={c.discount}
              />
            )}
          </div>
      </section>
    </div>
  )
}

export default Section3;