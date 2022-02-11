import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMyReviewThunk } from '../../../reducers/api/userApi';
import styles from './MyReviewList.module.css';

const MyReviewList = () => {
    const dispatch = useDispatch();
    const { user_id, myReview } = useSelector(state => state.user);
    const fetchMyReviews = async () => {
        try {
            await dispatch(getMyReviewThunk({ userId: user_id })).unwrap();
        } catch (err) {
            throw err;
        }
    };

    useEffect(() => {
        fetchMyReviews();
    }, [dispatch]);

    useEffect(() => {
    }, [myReview]);

    return (
        <section>
            <div className={styles.wrapper}>
                <h2>나의 클래스 후기</h2>
                <div>
                    {
                       myReview.map((review, idx) => 
                        <div key={idx} className={styles.reviewBox}>
                            <div className={styles.imgBox}><img src={review.Class.img_url} alt={review.Class.name} /></div>
                            <div>
                                <span className={styles.cName}>{review.Class.name}</span>
                                <p className={styles.createdAt}>작성일: {review.createdAt.split('T')[0]}</p>
                                <p className={styles.reviewContents}>{review.contents}</p>
                            </div>
                        </div>
                       ) 
                    }
                </div>
            </div>
        </section>
    )
}

export default MyReviewList;