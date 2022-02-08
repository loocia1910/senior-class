import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClassReviewThunk } from '../../../reducers/api/classApi';
import styles from './ClassReviewWrap.module.css';

const data = [
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    }
]

const ClassReviewWrap = ({ classId }) => {
    const dispatch = useDispatch();
    const fetchReviews = async () => {
        try {
            await dispatch(getClassReviewThunk({ classId })).unwrap();
        } catch (err) {
            throw err;
        }
    }
    const { classReviews } = useSelector(state => state.class);
    console.log('클래스 리뷰 컴포넌트 리뷰', classReviews)

    useEffect(() => {
        fetchReviews();
    }, [dispatch]);

    useEffect(() => {

    }, [classReviews]);

    return (
        <section>
            {
                classReviews.length > 0
                ?
                classReviews.map((c, idx) => (
                    <ClassReview
                      key={idx} 
                      login_id={c.User.login_id}
                      profile={c.User.profile_url}
                      contents={c.contents}
                      createdAt={c.createdAt}
                    />
                ))
                :
                <p className={styles.noReview}>등록된 리뷰가 없습니다.</p>
            }
        </section>
    )
}

export const ClassReview = ({login_id, profile, contents, createdAt}) => {
    let created = createdAt.split('T')[0];
    console.log('생성일', created)
    // 클래스 아이디를 props로 받아와 해당 클래스의 리뷰를 받아온다.
    return (
        <div className={styles.container}>
            <div className={`${styles.flex} ${styles.wrapper}`}>
                 <div  className={styles.profile}>
                    <img src={!!profile ? profile : `/img/user/default.jpg`} alt={login_id + '프로필 이미지'} />
                 </div> 
                 <div>
                     <p className={styles.login_id}>{login_id}</p>
                     <span className={styles.createdAt}>{created}</span>
                     <p>{contents}</p>   
                 </div>
            </div>
        </div>
    )
}

export default ClassReviewWrap;