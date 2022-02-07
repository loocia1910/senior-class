import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import styles from './ClassCard.module.css';
import { ReactComponent as UnlikeHeartIcon } from './unlikeheart.svg';
import { ReactComponent as LikeHeartIcon } from './likeheart.svg';
import { addlikesThunk, deleteLikesThunk } from '../../../reducers/api/likeApi';
import RegionLable from '../../region/RegionLable';

const ClassCard = ({ classId, teacherName, cName, price, discount, img, region}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userId  = useSelector((state) => state.user.user_id);
  const isLogin = useSelector((state) => state.user.is_login);
  const [ isHeartClicked, setIsHeartClicked ] = useState(false);

  const heartClicked = async () => {
    console.log('하트 클릭')
    // 로그인이 안 되어 있으면 로그인 요청
    if(!isLogin) {
      navigate('signin');
      return;
    }

    setIsHeartClicked(!isHeartClicked)

    //  찜 등록 요청
    if(!isHeartClicked) {
      try {
        await dispatch(addlikesThunk({ userId, classId }).unwrap())
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

    // 찜 삭제 요청
    if(isHeartClicked) {
      try {
        await dispatch(deleteLikesThunk({ userId, classId }).unwrap())
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  
  }

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
            !isHeartClicked
            ?
          <UnlikeHeartIcon
            className={styles.heartIcon}
            fill='#FF7878'
            
          />
          :
            <LikeHeartIcon
              className={styles.heartIcon}
              fill='#FF7878'
              // onClick={heartClicked}
            />
          }
        </div>
      </div>
  )
}

export default ClassCard;