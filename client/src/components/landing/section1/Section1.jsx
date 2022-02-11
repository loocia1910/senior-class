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
  const bgColors = ['#fbfecb', '#FFEFEF', '#C8F2EF', '#E7FBBE'];
  const [ bgIdx, setBgIdx ] = useState(0)

  // 배너 재생
  const [ isBnPlay, setBnPlay ] = useState(true);
  const autoplayRef = useRef( null)
  const navigationPrevRef = useRef('<div></div>'|| null)
  const navigationNextRef = useRef('<div></div>'|| null)

  const atuoplayStop =() => autoplayRef.current.swiper.autoplay.stop()
  const atuoplayStart =() => autoplayRef.current.swiper.autoplay.start()
  return (
            <div className={styles.container}>
              <section>
                <div className={styles.slider} style={{ background: `${bgColors[bgIdx]}` }}>
                  <Swiper
                  ref={autoplayRef}
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
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false, // 인터렉션이 있어도 움직임,
                  }}
                  effect={"fade"}
                  >
                    {/* 사진명이 연속된 수로 이뤄진 이미지 슬라이드 만들기 */}
                    {Array.from({length: 4}, (v, i) => i+1 ).map((n,idx) =>
                      <SwiperSlide className={styles.slides} key={idx}>
                        <img className={styles.slidesImg} src={`/img/banner/banner${n}.jpg`} alt={`배너이미지 ${n}`} />
                      </SwiperSlide>
                    )}
                    {/* 전후 네비게이션 */}
                    <div className={styles.slidesNav} >
                      <div className={`${styles.slideBefore} ${styles.zIndex_10}`} ref={navigationPrevRef}></div>
                      <div className={`${styles.slideAfter} ${styles.zIndex_10}`} ref={navigationNextRef}></div>
                    </div>
                    {/* 재생 버튼 */}
                    {
                      isBnPlay ?
                      <div
                        // ref={autoplayRef}
                        className={`${styles.slidePause} ${styles.zIndex_10}`}
                        onClick={() => {
                          atuoplayStop()
                          setBnPlay(false)
                        }}>
                      </div>
                      :
                      <div
                        // ref={autoplayRef}
                        className={`${styles.slidePlay} ${styles.zIndex_10}`}
                        onClick={() => {
                          atuoplayStart()
                          setBnPlay(true)
                        }}
                        >
                      </div>
                    }
                    {/* 페이지 카운트 */}
                    <div className={`${styles.pageNum} ${styles.zIndex_10}`}>
                      <span className={styles.BoldNum}>{bgIdx+1}</span>
                      <span className={styles.lightNum}> / {bgColors.length}</span>
                    </div>
                  </Swiper>
                </div>
              </section>
            </div>
  )
}

export default Section1;