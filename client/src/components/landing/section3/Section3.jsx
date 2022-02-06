import { useSelector } from 'react-redux';
import ClassCard from '../../class/classCard/ClassCard';
import styles from './Section3.module.css'


// 온라인 추천 클래스
const Section3 = () => {
  const { onlineClass } = useSelector((state) => state.class);
  const sixOfonlineClass = onlineClass.slice(0,6);

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
          <h2 className={styles.title}>온라인 추천 클래스</h2>
          <span className={styles.moreClass}>온라인 클래스 더보기 + </span>
          <div className={styles.classCardBox}>
            {sixOfonlineClass.map((c,idx) =>
              <div key={idx} className={styles.card}>
                <ClassCard
                  classId={c.id}
                  teacherName={c.User.name}
                  cName={c.name}
                  price={c.price}
                  discount={c.discount}
                  region={c.region}
                  img={c.img_url}
                />
              </div>
            )}
          </div>
      </section>
    </div>
  )
}

export default Section3;