import ClassCard from '../../class/classCard/ClassCard';
import styles from './Section5.module.css'

const data = [
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '서울'
  },
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '서울'
  },
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '충청도'
  },
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '충청도'
  },
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '충청도'
  },
  {
    teacherName : '강사명',
    className : '클래스명',
    price : '22,000',
    discount: '15',
    region: '충청도'
  },
]
// ??? 지역에 따라 분리하기
const Section5 = () => {
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
      <h2 className={styles.title}>오프라인 추천 클래스</h2>
      <span className={styles.moreClass}>오프라인 클래스 더보기 + </span>
          <div className={styles.classCardBox}>
            {data.map((c, idx) =>
              <div className={styles.card}>
                <ClassCard
                  key={idx}
                  teacherName={c.teacherName}
                  cName={c.className}
                  price={c.price}
                  discount={c.discount}
                  region={c.region}
                />
              </div>
            )}
          </div>
      </section>
    </div>
  )
}

export default Section5;