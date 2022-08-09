import Card from "react-bootstrap/Card";
// import Suggestions from "..";
import watchImg from "../../../../../assets/images/watch1.png";
import watchImg2 from "../../../../../assets/images/watch2.png";
import watchImg1 from "../../../../../assets/images/son.jpg";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../Suggestions/Suggestions.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Suggestions from "./../../Suggestions/index";
import { Link } from "react-router-dom";

function SliderTopProduct({ setResultTopProduct, resultTopProduct }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={4}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="list-slider-brand"
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        // when window width is >= 640px
        0: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          maxWidth: 768,
          slidesPerView: 2,
        },
        1024: {
          maxWidth: 1024,
          slidesPerView: 4,
        },
      }}
    >
      {resultTopProduct &&
        resultTopProduct.map((item, index) => (
          <SwiperSlide key={index}>
            <Link to={`/detailproduct/${item.watchId}`}>
              <Card>
                <div className="slider-suggestion-img">
                  <Card.Img
                    variant="top"
                    src={
                      item.images &&
                      "https://dnk.mdcsoftware.com.vn/" + item.images[0]
                    }
                  />
                </div>

                <Card.Body className="body-content-title">
                  <Card.Title className="slider-suggestion-title">
                    {item.reference.model.brand.name}
                  </Card.Title>
                  <Card.Text className="sub-title">
                    {item.reference.model.name}
                  </Card.Text>
                  <Card.Text className="price" href="#">
                    {item.retailPrice} {item.currency}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default SliderTopProduct;
