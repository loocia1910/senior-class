import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './ClassCard.module.css';
import { ReactComponent as UnlikeHeartIcon } from './unlikeheart.svg';
import { ReactComponent as LikeHeartIcon } from './likeheart.svg';
import { addlikesThunk, deleteLikesThunk } from '../../../reducers/api/likeApi';

const ClassCard = ({ classId, teacherName, cName, price, discount, img, region}) => {
  // ??? 클래스 아이디값 props로 넘겨주기
  const userId  = useSelector((state) => state.user.user_id);
  const isLogin = useSelector((state) => state.user.is_login);
  // const isLogin = false;
  const [ isHeartClicked, setIsHeartClicked ] = useState(false);

  const dispatch = useDispatch();
  const heartClicked = async () => {
    console.log('하트클릭')
    setIsHeartClicked(!isHeartClicked)

    // 로그인 된 상태에서 찜 등록 요청
    if( isLogin && !isHeartClicked) {
      try {
        await dispatch(addlikesThunk({ userId, classId }).unwrap())
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

    // 로그인 된 상태에서 찜 삭제 요청
    if( isLogin && isHeartClicked) {
      try {
        await dispatch(deleteLikesThunk({ userId, classId }).unwrap())
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
  
  }
  const navigate = useNavigate();

  return (
      <div className={styles.container}>
          <div className={styles.imgBox}>
              <img src={img} alt={cName} />
          </div>
          <div className={styles.classInfoBox}>
              {!!region ? <span className={styles.region}>{region}</span> : null}
              <span className={styles.teacherName}>{teacherName}</span>
              <p className={styles.className}>{cName}</p>
              <span className={styles.discount}>{discount}</span><span className={styles.percentTxt}>%</span>
              <span className={styles.price}>{price}</span><span>원</span>
              <span className={styles.month}>(3개월)</span>
                {
                  isHeartClicked === false  || (isLogin && isHeartClicked === false)?
                 <UnlikeHeartIcon 
                   className={styles.unlikeheartIcon}
                   onClick={heartClicked}
                 />
                 :
                  isLogin && isHeartClicked ?
                  <LikeHeartIcon 
                    className={styles.unlikeheartIcon}
                    fill='red'
                    onClick={heartClicked}                    
                  />
                  :
                  navigate('./signin')
                }
          </div>
      </div>
  )
}

export default ClassCard;