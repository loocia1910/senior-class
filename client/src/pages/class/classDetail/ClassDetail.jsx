import { useRef, useState, useEffect } from 'react';
import styles from './ClassDetail.module.css';

const ClassDetail = () => {
    const infoRef = useRef(null);
    const teacherRef = useRef(null);
    const reviewRef = useRef(null);
    const refundRef = useRef(null);

    // Nav 메뉴 클릭시 해당 ref로 가기
    const onClickInfo = () => {
        infoRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const onClickTeacher = () => {
        teacherRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const onClickReview = () => {
        reviewRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const onClickRefund = () => {
        refundRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    // 현재 내용에 따른 Nav 메뉴 active
    const [infoActive, setInfoActive] = useState(false);
    const [teacherActive, setTeacherActive] = useState(false);
    const [reviewActive, setReviewActive] = useState(false);
    const [refundActive, setRefundActive] = useState(false);

    const updateScroll = () => {
        // if(!infoRef.current ) return;
        if (infoRef.current.getBoundingClientRect().top <= 0 || null) {
            setInfoActive(true)
        } else if(infoRef.current.getBoundingClientRect().top > 0){
            setInfoActive(false)
        }
        
        if (teacherRef.current.getBoundingClientRect().top <= 0 || null){
            setInfoActive(false)
            setTeacherActive(true);
        } else if(teacherRef.current.getBoundingClientRect().top > 0){
            setTeacherActive(false)
        }

        if (reviewRef.current.getBoundingClientRect().top <= 0 || null){
            setTeacherActive(false)
            setReviewActive(true);
        } else if(reviewRef.current.getBoundingClientRect().top > 0){
            setReviewActive(false)
        }

        if (refundRef.current.getBoundingClientRect().top <= 0 || null){
            setReviewActive(false)
            setRefundActive(true);       
        } else if(refundRef.current.getBoundingClientRect().top > 0){
            setRefundActive(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, [infoRef, teacherRef, reviewRef, refundRef])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.contents}>
                    {/* 메인 배너 */}
                    <div className={styles.mainbanner}>
                        <p>온라인 클래스  온동건강  클래스명</p>
                        <h2>클래스 명</h2>
                        <div>
                            <span>지역</span> &nbsp;
                            <span>강사명</span>
                        </div>
                        <div className={styles.banner}>
                            {/* <img src="" alt="" /> */}
                        </div>
                    </div>
                    {/* nav */}
                    <nav className={styles.nav}>
                        <ul>
                            <li onClick={onClickInfo} className={infoActive ? `${styles.active} ${styles.navMenu}` : `${styles.navMenu}`}>클래스 소개</li>
                            <li onClick={onClickTeacher} className={teacherActive ? `${styles.active} ${styles.navMenu}` : `${styles.navMenu}`}>강사 소개</li>
                            <li onClick={onClickReview} className={reviewActive ? `${styles.active} ${styles.navMenu}` : `${styles.navMenu}`}>수강 후기</li>
                            <li onClick={onClickRefund} className={refundActive ? `${styles.active} ${styles.navMenu}` : `${styles.navMenu}`}>환불 정책</li>
                        </ul>
                    </nav>
                    {/* 클래스 소개 */}
                    <div id='info' className={styles.info}>
                        <div ref={infoRef} className={styles.mark}></div>
                        <h2 className={styles.subTitle}>클래스 소개</h2>
                        <div className={styles.banner}>
                                {/* <img src="" alt="" /> */}
                        </div>
                        <div>
                            <p>클래스 설명</p>
                            <p>클래스 설명</p>
                            <p>클래스 설명</p>
                        </div>
                    </div>
                    {/* 강사 소개 */}
                    <div id='teacher' className={styles.teacher}>
                        <div ref={teacherRef} className={styles.mark}></div>
                        <h2 className={styles.subTitle}>강사 소개</h2>
                        <p>강사 설명</p>
                        <p>강사 설명</p>
                        <p>강사 설명</p>
                    </div>
                    {/* 수강 후기 */}
                    <div id='review' className={styles.review}>
                        <div ref={reviewRef} className={styles.mark}></div>
                        <h2 className={styles.subTitle}>수강후기</h2>
                    </div>
                    {/* 환불 정책 */}
                    <div id='refund' className={styles.refund_policy}>
                        <div ref={refundRef} className={styles.mark}></div>
                        <div >
                            <h2 className={styles.subTitle}>환불 정책</h2>
                            <div className={styles.refund_policy_text}>
                                <p>온라인 수업의 경우 구입 후 환불은 불가합니다.</p>
                                <p>단, 오프라인 수업의 경우 담당 강사에 따라 환불 규정이 다를 수 있으므로, 해당 강사에게 환불 문의 하시기 바랍니다.</p>
                            </div>
                        </div>
                    </div>                  
                </section>
                {/* 결제 */}
                <section className={styles.payment}>
                    <span>지역</span>
                    <span>강사명</span>
                    <h3>클래스명</h3>
                    <div className={styles.priceBox}>
                        <p>3개월 할부</p>
                        <span>15%</span>
                        <span>월 15,000원</span>
                        <p>총 할인액 -13,000원</p>
                    </div>
                    <div>
                        <button className={`${styles.btn}`}>공유하기</button>
                        <button className={`${styles.btn}`}>찜하기</button>
                    </div>
                    <div>
                        <button className={`${styles.btn}`}>클래스 신청하기</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ClassDetail;