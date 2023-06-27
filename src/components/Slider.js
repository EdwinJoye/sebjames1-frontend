import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "../css/components/slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

const Slider = ({ picsUrl }) => {
  return (
    <div className="slider__all-container">
      <div className="slider__swiper-container">
        <Swiper
          autoplay={{
            delay: 15000,
          }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation, keyboard]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={true}
          keyboard={true}
          navigation={true}
        >
          {picsUrl.map((url) => {
            return (
              <SwiperSlide key={url}>
                <img className="slider__img" src={url} alt="screen-pics" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};
export default Slider;
