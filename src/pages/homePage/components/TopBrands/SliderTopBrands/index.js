import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "../TopBrands.scss";

// import { images } from "~/assets/images";
const SliderTopBrands = ({ resultBrand, setResultBrand }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={7}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="list-slider-brand"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px
          0: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            maxWidth: 768,
            slidesPerView: 5,
          },
          1024: {
            maxWidth: 1024,
            slidesPerView: 7,
          },
        }}
      >
        {resultBrand.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="item-brand">
              <div className="item-brand-img">
                <img
                  src={"https://dnk.mdcsoftware.com.vn/" + item.logo}
                  alt="brands"
                />
              </div>
              <h5 className="title-item-brand">{item.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SliderTopBrands;
