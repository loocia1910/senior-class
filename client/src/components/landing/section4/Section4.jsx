import Slider from 'react-slick';
import styles from './Section4.module.css';
import './Section4.css'; // slick css 

import { categorys } from '../section2/data';

const Section4 = () => {

  const PrevArrow = ({onClick}) => {
    return (
      <div className='arrBox'>
        <div className='arr prev' onClick={onClick}></div>
      </div>
    )
  };

  const NextArrow = ({onClick}) => {
    return (
      <div className='arrBox'>
        <div className='arr next' onClick={onClick}></div>
      </div>
    )
  };


  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow/>,
  };

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
          <h2 className={styles.title}>수강생 리얼 후기</h2>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
          <div className={styles.slideBox}>
            <div className={styles.slidesTxt}>
              <span>Senior Class</span>
              <p className={styles.subTitle}><strong>청</strong>춘은 <strong>바</strong>로 <strong>지</strong>금</p>
              <p>다른 회원님의 수강후기를 확인해보세요.</p>
              <p>회원님에 맞는 취미를 찾아보세요!</p>
              {/* <div className={styles.slidesNav}>
                  <div className={`${styles.slideBefore} ${styles.zIndex_10}`} ></div>
                  <div className={`${styles.slideAfter} ${styles.zIndex_10}`} ></div>
              </div> */}
            </div>
          </div>
          <Slider {...settings} className='slider'>
            {categorys.map((c,idx) => 
            <div key={idx} className='slides'>
                <img src={c.img} alt={c.name} className='slide'/>
            </div>  
            )}
          </ Slider>
      </section>
    </div>
  )
}

export default Section4;