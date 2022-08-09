import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "swiper/css";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderProduct.scss";
import { Link } from "react-router-dom";
import GetData from "../../../../components/GetData";
import MiscService from "./../../../../Service/MiscService/index";
import Reveal from "react-reveal/Zoom";

const SliderProduct = () => {
  // const dataWatch = GetData.GetDataWatch();
  const [resultTopProduct, setResultTopProduct] = useState([]);
  const token = GetData.GetToken();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await MiscService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultTopProduct(result.data.topWatches);
    };
    fetchApi();
  }, []);

  return (
    <div className="slider-product">
      {/* <h2 className="slider-product-title">Gợi ý cho bạn</h2> */}
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={5}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
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
            slidesPerView: 3,
          },
          1024: {
            maxWidth: 1024,
            slidesPerView: 4,
          },
        }}
      >
        {resultTopProduct &&
          resultTopProduct.map((item) => (
            <SwiperSlide key={item.watchId}>
              <Reveal left>
                <Link to={`/detailproduct/${item.watchId}`}>
                  <Card className="product-item">
                    <div className="product-item-img">
                      <Card.Img
                        variant="top"
                        src={
                          item.images &&
                          "https://dnk.mdcsoftware.com.vn/" + item.images[0]
                        }
                      />
                    </div>
                    <div>
                      <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                    </div>
                    <Card.Body>
                      <Card.Title>{item.reference.model.brand.name}</Card.Title>
                      <Card.Text className="sub-title">
                        {item.reference.model.name}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {item.retailPrice}
                        {item.currency}
                      </Card.Text>
                      <div className="d-flex number-star align-items-center">
                        <FontAwesomeIcon icon={faStar} className="icon-star" />
                        <span>4.9</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Reveal>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
