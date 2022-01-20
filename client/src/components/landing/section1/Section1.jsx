import { useState, useRef } from 'react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
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
  const [ bgIdx, setBgIdx ] = useState(0)

  // 배너 재생
  const [ isBnPlay, setBnPlay ] = useState(true);
  const autoplaRef = useRef( null)
  const navigationPrevRef = useRef('<div></div>'|| null)
  const navigationNextRef = useRef('<div></div>'|| null)

  const onMouseEnter =() => autoplaRef.current.swiper.autoplay.stop()
  const onMouseLeave =() => autoplaRef.current.swiper.autoplay.start()
  return (
            <section>
              <div className={styles.slider} style={{ background: `${bgColors[bgIdx]}` }}>
                <Swiper
                ref={autoplaRef}
                modules={[Navigation, Pagination, EffectFade, Autoplay]}
                className={styles.slidesBox}
                slidesPerView={1}
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
                onSlideChange={(swiper) => {
                  setBgIdx(swiper.activeIndex)
                }}
                onSwiper={s => console.log("swiper", s) }       
                autoplay={{ 
                  delay: 4000,
                  disableOnInteraction: false, // 인터렉션이 있어도 움직임,
                }}
                effect={"fade"}
                >
                  {/* 사진명이 연속된 수로 이뤄진 이미지 슬라이드 만들기 */}
                  {Array.from({length: 4}, (v, i) => i+1 ).map((n,idx) => 
                    <SwiperSlide className={styles.slides} key={idx}>
                      <img className={styles.slidesImg} src={`/img/banner/${n}.jpg`} alt={`${n}`} />
                    </SwiperSlide>
                  )}
                  {/* 전후 네비게이션 */}
                  <div className={`${styles.slideNav1} ${styles.zIndex_10}`}  ref={navigationPrevRef}>prev</div>
                  <div className={`${styles.slideNav2} ${styles.zIndex_10}`} ref={navigationNextRef}>next</div>
                  {/* 재생 버튼 */}
                  { 
                    isBnPlay ? 
                    <div 
                      ref={autoplaRef}
                      className={`${styles.slidePause} ${styles.zIndex_10}`}
                      onClick={() => {
                        onMouseEnter()
                        setBnPlay(false)
                      }}>일시정지
                    </div> :
                    <div
                      ref={autoplaRef}
                      className={`${styles.slidePlay} ${styles.zIndex_10}`}
                      onClick={() => {
                        onMouseLeave()
                        setBnPlay(true)
                      }}
                      >재생</div>
                  }
                  {/* 페이지 카운트 */}
                  <div className={`${styles.pageNum} ${styles.zIndex_10}`}>
                    <span>{bgIdx+1}</span>
                    /
                    <span>{bgColors.length}</span>
                  </div>
                </Swiper>
              </div>
            </section>
  )
}

export default Section1;