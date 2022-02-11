import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ClassCard from '../../../components/class/classCard/ClassCard';
import styles from './ClassLikeList.module.css';

const ClassLikeList = () => {
    const myLikes = useSelector(state => state.like);
    const [ _myLikes, setMyLikes ] = useState(myLikes);
    
    useEffect(() => {
        setMyLikes(myLikes);
        console.log('마이라이크', _myLikes)
    },[ myLikes,_myLikes])

    
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>나의 찜</h2>
                <div className={styles.classCardBox}>
                    {
                     myLikes.length === 0 ?
                     <div className={styles.noData}>등록된 클래스 찜이 없습니다.</div>
                     :
                    !!myLikes && myLikes.map((like, idx) =>
                        <div key={idx} className={styles.card}>
                            <ClassCard
                                classId={like.Class.id}
                                teacherName={like.Class.User.name}
                                cName={like.Class.name}
                                price={like.Class.price}
                                discount={like.Class.discount}
                                region={like.Class.region}
                                img={like.Class.img_url}
                            />
                      </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default ClassLikeList;