import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
// import Header from "./Header";
import imgSwiper1 from "../img/home/screen-1.jpg";
import imgSwiper2 from "../img/home/screen-2.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomeSwiper = () => {
  return (
    <div className="home__all-container">
      <Swiper
        autoplay={{
          delay: 10000,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <img
            className="home__swiperSlide-img"
            src={imgSwiper1}
            alt="screen1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="home__swiperSlide-img"
            src={imgSwiper2}
            alt="screen2"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
