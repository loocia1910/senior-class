import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClassCard from '../../../components/class/classCard/ClassCard';
import ClassMenuNav from '../../../components/class/classMenu/ClassMenuNav';
import styles from './ClassList.module.css';

export const ClassListWrap = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section >
                    <ClassMenuNav />
                </section>
                <section >
                    <Outlet />
                </section>
            </div>
        </div>
    )
}

export const ClassList = () => {
    const { onlineClass, offlineClass, freeClass, latestClass } = useSelector((state) => state.class)
    const params = useParams();
    const { type, category } = params;
    const [ _type, setType ] = useState(type); // 해더 메뉴 클릭에 따라 type 변경
    const [ classList, setClassList ] = useState([]);


    useEffect(() => {
        console.log('type', type)
        if(type === 'online') {
            setType('온라인');
            setClassList(onlineClass);
            return;
        } else if (type === 'offline') {
            setType('오프라인');
            setClassList(offlineClass);
            return;
        } else if (type === 'latest') {
            setType('신규');
            setClassList(latestClass);
            return;
        } else if (type === 'free'){
            setType('무료')
            setClassList(freeClass);
            return;
        }

    }, [type, classList])
    

    return (
        <div className={styles.listContainer}>
            <span>{_type} 클래스</span>
            <h2>{category || '전체보기'}</h2>
            <div className={styles.classCardBox}>
                {classList.map((c,idx) =>
                <div key={idx} className={styles.card}>
                    {/* ??? to 파라미터 클래스 아이디로 바꾸기 */}
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
        </div>
    )
}


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
    