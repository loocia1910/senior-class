import { useState, useRef } from 'react';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import styles from './Section1.module.css'

const Section1 = () => {

  // 배너 배경색 설정
  const bgColors = ['gray', 'red', 'green', 'blue'];
  const [ bgIdx, setBgIdx ] = useState(1)
  const [ bgColor, setBgColor ] = useState('gray');
  const changebgIndex = () => {
    if(bgIdx === bgColors.length-1) {
      setBgIdx(0)
    } else {
      setBgIdx(bgIdx+1);
    }
    setBgColor(bgColors[bgIdx])
  }
  // 배너 재생
  const [ isBnPlay, setBnPlay ] = useState(true);
  const navigationPrevRef = useRef('<div></div>'|| null)
  const navigationNextRef = useRef('<div></div>'||null)

  return (
            <section>
              <div className={styles.slider} style={{ background: `${bgColor}` }}>
                <Swiper
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                className={styles.slidesBox}
                slidesPerView={1}
                onSlideChange={changebgIndex}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                // autoplay={{ 
                //   delay: 4000,
                //   disableOnInteraction: false, // 인터렉션이 있어도 움직임
                // }}
                effect={"fade"}
                >
                  {/* 사진명이 연속된 수로 이뤄진 이미지 슬라이드 만들기 */}
                  {Array.from({length: 4}, (v, i) => i+1 ).map((n,idx) => 
                    <SwiperSlide className={styles.slides} key={idx}>
                      <img className={styles.slidesImg} src={`/img/banner/${n}.jpg`} alt={`${n}`} />
                    </SwiperSlide>
                  )}
                <div className={styles.slideNav1}  ref={navigationPrevRef}>prev</div>
                <div className={styles.slideNav2} ref={navigationNextRef}>next</div>
                </Swiper>
                <div >
                  <span>{bgIdx === 0 ? bgColors.length : bgIdx}</span>
                  /
                  <span>{bgColors.length}</span>
                </div>
                {/* <div >
                  { 
                    isBnPlay ? 
                    <button 
                      ref={autoplayStartRef}
                      onClick={handlePlayStop}>일시정지</button> :
                    <button
                      ref={autoplayStopRef}
                      onClick={handlePlayStart}>재생</button>
                  }
                </div> */}
              </div>
            </section>
  )
}

export default Section1;