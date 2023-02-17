import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "./swiperOverview.scss";

const SwiperOverview = () => {
  return (
    <div className="swiper__container position-relative my-5">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper position-static"
        loop={true}
      >
        <SwiperSlide className="swiper-item">
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
        <SwiperSlide className="swiper-item">
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperOverview;
