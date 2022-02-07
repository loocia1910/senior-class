import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as UnlikeHeartIcon } from './unlikeheart.svg';
import { ReactComponent as LikeHeartIcon } from './likeheart.svg';
import { addlikesThunk, deleteLikesThunk } from '../../../reducers/api/likeApi';
import RegionLable from '../../region/RegionLable';
import styles from './ClassCard.module.css';

const ClassCard = ({ classId, teacherName, cName, price, discount, img, region}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId  = useSelector((state) => state.user.user_id);
  const isLogin = useSelector((state) => state.user.is_login);


  const myLikes = useSelector((state) => state.like);
  const [ _myLikes, setMyLikes ] = useState(myLikes);// 현재 나의 좋아요 리스트
  const isMyLikes = _myLikes.filter((el) => el.classId === classId).length > 0 ;
  const [ isHeartClicked, setIsHeartClicked ] = useState(isMyLikes);
  
  const heartClicked = async () => {
    console.log('하트 클릭')
    // 로그인이 안 되어 있으면 로그인 요청
    try {
      if(!isLogin) {
        navigate('signin');
        return;
      }

      setIsHeartClicked(!isHeartClicked)

      //  찜 등록 요청
      if(!isHeartClicked) {
          await dispatch(addlikesThunk({ userId, classId })).unwrap();
      } else {
      // 찜 삭제 요청
          await dispatch(deleteLikesThunk({ userId, classId })).unwrap();
      }
    } catch (err) {
      console.log(err)
      throw err;
    }
  
  }

  useEffect(() => {
    setMyLikes(myLikes);
    // console.log('_mylike', _myLikes)
  }, [myLikes, _myLikes]);



  return (
      <div className={styles.container}>
        <div onClick={() => navigate(`/product/${classId}`)}>
            <div className={styles.imgBox}>
                <img src={img} alt={cName} />
            </div>
            <div className={styles.classInfoBox}>
                {!!region ? <RegionLable region={region}/> : null}
                <span className={styles.teacherName}>{teacherName}</span>
                <p className={styles.className}>{cName}</p>
                <span className={styles.discount}>{discount === 0 ? null : `${discount}%`}</span>
                <span className={price === 0 ? `${styles.priceFree}`:`${styles.price}`}>{price === 0 ? '무료' : `${price}원`}</span>
                <span className={styles.month}>{price === 0 ? null : `(3개월)`}</span>
            </div>
        </div>
        <div onClick={heartClicked} className={styles.heartIconBox}>
          {
            // 내가 찜한 하트일 때
            isMyLikes
            ?
          <LikeHeartIcon
            className={styles.heartIcon}
            fill='#FF7878'
            
          />
          :
            <UnlikeHeartIcon
              className={styles.heartIcon}
              fill='#FF7878'
            />
          }
        </div>
      </div>
  )
}

export default ClassCard;