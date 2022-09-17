// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y]}
       spaceBetween={50}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
       scrollbar={{ draggable: false }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
      <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
      <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
      <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
          <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
          <SwiperSlide><div>
            <img src="https://assets.glxplay.io/images/w1600/title/hung-long-phong-ba_web_spotlight_8871d29eddb17478d52c39efdc300086.jpg" alt=""/>
          </div></SwiperSlide>
    </Swiper>
  );
};