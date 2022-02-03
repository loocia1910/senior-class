import { useState, useEffect } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
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
    
    const params = useParams();
    const { type, category } = params;
    console.log('params', params);
    const [ _type, setType ] = useState(type);


    useEffect(() => {
        console.log('type', type)
        if(type === 'online') {
            setType('온라인');
            return;
        } else if (type === 'offline') {
            setType('오프라인')
            return;
        } else if (type === 'latest') {
            setType('신규')
            return;
        } else if (type === 'free'){
            setType('무료')
            return;
        }

    }, [type])
    

    return (
        <div className={styles.listContainer}>
            <span>{_type} 클래스</span>
            <h2>{category || '전체보기'}</h2>
            <div className={styles.classCardBox}>
                {data.map((c,idx) =>
                <div key={idx} className={styles.card}>
                    <Link to={`/product/${c.className}`}>
                        {/* ??? to 파라미터 클래스 아이디로 바꾸기 */}
                        <ClassCard
                            teacherName={c.teacherName}
                            cName={c.className}
                            price={c.price}
                            discount={c.discount}
                        />
                    </Link>
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
    