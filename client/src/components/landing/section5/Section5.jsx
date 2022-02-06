import { useSelector } from 'react-redux';
import ClassCard from '../../class/classCard/ClassCard';
import styles from './Section5.module.css'

const Section5 = () => {
  const { offlineClass } = useSelector((state) => state.class);
  const sixOfofflineClass= offlineClass.slice(0,6);
  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
      <h2 className={styles.title}>오프라인 추천 클래스</h2>
      <span className={styles.moreClass}>오프라인 클래스 더보기 + </span>
          <div className={styles.classCardBox}>
            {sixOfofflineClass.map((c, idx) =>
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

export default Section5;