import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import "../css/components/slider.css";

const Slider = ({ picsUrl }) => {
  return (
    <div className="slider__all-container">
      {picsUrl && (
        <div className="slider__swiper-container">
          <Swiper
            autoplay={{
              delay: 15000,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
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
      )}
    </div>
  );
};
export default Slider;
