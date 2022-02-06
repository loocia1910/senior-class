import { useRef, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addlikesThunk, deleteLikesThunk } from '../../../reducers/api/likeApi';
import { getClassDetailThunk } from '../../../reducers/api/classApi';
import AlarmModal from '../../../components/common/modal/alarmModal/AlarmModal';
import RegionLabel from '../../../components/region/RegionLable';
import ClassReviewWrap from '../../../components/class/classReview/ClassReview';
import { categorys } from './catagorys';
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
        if(!infoRef.current ) return;
        if (infoRef.current.getBoundingClientRect().top <= 30 || null) {
            setInfoActive(true)
        } else if(infoRef.current.getBoundingClientRect().top > 30){
            setInfoActive(false)
        }
        
        if (teacherRef.current.getBoundingClientRect().top <= 30 || null){
            setInfoActive(false)
            setTeacherActive(true);
        } else if(teacherRef.current.getBoundingClientRect().top > 30){
            setTeacherActive(false)
        }

        if (reviewRef.current.getBoundingClientRect().top <= 30 || null){
            setTeacherActive(false)
            setReviewActive(true);
        } else if(reviewRef.current.getBoundingClientRect().top > 30){
            setReviewActive(false)
        }

        if (refundRef.current.getBoundingClientRect().top <= 30 || null){
            setReviewActive(false)
            setRefundActive(true);       
        } else if(refundRef.current.getBoundingClientRect().top > 30){
            setRefundActive(false)
        }
    }


    // 찜하기 버튼
    const { is_login, login_id } = useSelector((state) => state.user);
    const [ isHeartClicked, setIsHeartClicked ] = useState(false);
    const navigate = useNavigate();
    const classId = 1; // ??? 데이터 받으면 변경
    const dispatch = useDispatch();

    const onHeartClicked = async () => {
        console.log('하트클릭')

      setIsHeartClicked(!isHeartClicked)
      if(!is_login) {
          navigate('/signin');
          return;
      }

      // 로그인 된 상태에서 찜 등록 요청
      if( is_login && !isHeartClicked) {
        try {
          await dispatch(addlikesThunk({ login_id, classId }).unwrap())
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
  
      // 로그인 된 상태에서 찜 삭제 요청
      if( is_login && isHeartClicked) {
        try {
          await dispatch(deleteLikesThunk({ login_id, classId }).unwrap())
        } catch (err) {
          console.log(err);
          throw err;
        }
      }
    
    }


    // 결제하기 버튼
    const [ isModalOpen, setIsModalOpen ] = useState(false); 
    const modalMsg1 = '준비 중인 기능입니다.'; 

    const onBuyClicked = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = (e) => {
        setIsModalOpen(false);
    };

    // 클래스 아이디에 따른 데이터 가져오기
    const params = useParams();
    const fetchClassDetail = async () => {
        try {
            await dispatch(getClassDetailThunk({ classId: params.classId })).unwrap();
        }  catch(err) {
            throw err;
        }
    }

    // 스크롤 위치 따른 메뉴바 active css로 변경
    useEffect(() => {
        window.addEventListener('scroll', updateScroll)
    }, [infoRef, teacherRef, reviewRef, refundRef])
    
    // 클래스 아이디에 따른 데이터 가져오기 요청
    useEffect(() => {
        fetchClassDetail();
    }, [dispatch])

    const { name, price, discount, category, type, img_url, contents, teacherInfo, region, User} = useSelector(state => state.class.classDetail)
    const teacherName = User.name;
    const discountAmount = price*(discount/100);
    

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section className={styles.contents}>
                    {/* 메인 배너 */}
                    <div className={styles.mainbanner}>
                        <p className={styles.category}>{ type === '0'? '온라인 클래스' : '오프라인 클래스'} &gt; {categorys[category]}</p>
                        <div>
                            {region ? <RegionLabel region={region} />: null}
                            <span>{teacherName}</span>
                        </div>
                        <h2 className={styles.title}>{name}</h2>
                        <div className={styles.banner}>
                            <img src={img_url} alt={name} />
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
                        <div>
                            {contents.split('.').map((content,idx) => 
                              <p key={idx}>{content=== '' ? null : content}.</p>
                            )}
                        </div>
                    </div>
                    {/* 강사 소개 */}
                    <div id='teacher' className={styles.teacher}>
                        <div ref={teacherRef} className={styles.mark}></div>
                        <h2 className={styles.subTitle}>강사 소개</h2>
                        <div>
                            {teacherInfo.split('.').map((t_info,idx) => 
                             <p key={idx}>{t_info === '' ? null : t_info}.</p>
                            )}
                        </div>
                    </div>
                    {/* 수강 후기 */}
                    <div id='review' className={styles.review}>
                        <div ref={reviewRef} className={styles.mark}></div>
                        <h2 className={styles.subTitle}>수강후기</h2>
                        <ClassReviewWrap />
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
                    {region ? <RegionLabel region={region}/> : null}
                    <span>{teacherName}</span>
                    <h3 >{name}</h3>
                    <div className={styles.priceBox}>
                        {price === 0 ? null: <p className={styles.weight_light}>3개월 할부</p>}
                        {price === 0 ? null: <span className={styles.discount}>{discount}% &nbsp;&nbsp;</span>}
                        <span className={price === 0 ? `${styles.priceFree}`:`${styles.price}`}>{ price === 0 ? '무료' : `월 ${price}원`}</span>
                        {price === 0 ? null: <p className={styles.weight_light}>월 할인액 -{discountAmount}원</p>}
                    </div>
                    <div>
                        <button
                          className={`${styles.btn} ${styles.wishBtn}`}
                          onClick={onHeartClicked}
                        >
                          { isHeartClicked ? '찜 취소' : '찜하기' }
                        </button>
                    </div>
                    <div>
                        <button 
                          className={`${styles.btn} ${styles.payBtn}`}
                          onClick={onBuyClicked}
                        >
                          클래스 신청하기
                        </button>
                    </div>
                </section>
                {
                  isModalOpen ? 
                  <AlarmModal msg1={modalMsg1} failModal='failModal' handleCloseModal={handleCloseModal}/> :
                  null
                }
            </div>
        </div>
    )
}

export default ClassDetail;