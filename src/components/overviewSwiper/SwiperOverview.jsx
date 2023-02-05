import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import "./swiperOverview.scss";

const SwiperOverview = () => {
  return (
    <div className="swiper__container position-relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper position-static"
        loop={true}
      >
        <SwiperSlide>
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/imgs/report.png" alt="report" className="w-100" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperOverview;
