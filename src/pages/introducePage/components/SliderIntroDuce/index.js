import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./SliderIntroDuce.scss";
// import imgComentLeft from "../../../../assets/icon/icon-coment-left.png";
// import imgComentRight from "../../../../assets/icon/icon-coment-right.png";

const SliderInTroDuce = () => {
  return (
    <section className="slider-comment ">
      <div className="introduce-heading">
        <h2>Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <h3>
          Do you want to buy or sell new or pre-owned luxury watches? Then DK
          Private Club is the right place for you.
        </h3>
      </div>
      <div className="slider-container-list">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
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
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <div className="slider-introduce-item">
              <div className="slider-introduce-content">
                <div className="d-flex justify-content-between align-items-center slider-introduce-item-header">
                  <div>
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                  </div>
                  <p>01/07/2022</p>
                </div>
                <div className="d-flex slider-introduce-item-content">
                  <span>
                    {/* <img src={imgComentLeft} alt="img-left" /> */}"
                  </span>

                  <p className="slider-introduce-item-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit culpa nulla fugiat mollitia iusto voluptas odio
                    sapiente beatae nemo ad inventore unde deserunt, dolore
                    quidem magnam iste vitae, vero soluta!
                  </p>
                  <span className="align-self-end">
                    {/* <img src={imgComentRight} alt="imgright" /> */}"
                  </span>
                </div>
                <div className="d-flex slider-introduce-item-footer align-items-center">
                  <div className="slider-introduce-user-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_ZREcCjUydJs_YhCfVJvsctgxDcJI3dJNw&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3>Sơn Đặng</h3>
                    <p>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-introduce-item">
              <div className="slider-introduce-content">
                <div className="d-flex justify-content-between align-items-center slider-introduce-item-header">
                  <div>
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                  </div>
                  <p>01/07/2022</p>
                </div>
                <div className="d-flex slider-introduce-item-content">
                  <span>"</span>

                  <p className="slider-introduce-item-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit culpa nulla fugiat mollitia iusto voluptas odio
                    sapiente beatae nemo ad inventore unde deserunt, dolore
                    quidem magnam iste vitae, vero soluta!
                  </p>
                  <span className="align-self-end">"</span>
                </div>
                <div className="d-flex slider-introduce-item-footer align-items-center">
                  <div className="slider-introduce-user-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_ZREcCjUydJs_YhCfVJvsctgxDcJI3dJNw&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3>Sơn Đặng</h3>
                    <p>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-introduce-item">
              <div className="slider-introduce-content">
                <div className="d-flex justify-content-between align-items-center slider-introduce-item-header">
                  <div>
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                  </div>
                  <p>01/07/2022</p>
                </div>
                <div className="d-flex slider-introduce-item-content">
                  <span>"</span>

                  <p className="slider-introduce-item-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit culpa nulla fugiat mollitia iusto voluptas odio
                    sapiente beatae nemo ad inventore unde deserunt, dolore
                    quidem magnam iste vitae, vero soluta!
                  </p>
                  <span className="align-self-end">"</span>
                </div>
                <div className="d-flex slider-introduce-item-footer align-items-center">
                  <div className="slider-introduce-user-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_ZREcCjUydJs_YhCfVJvsctgxDcJI3dJNw&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3>Sơn Đặng</h3>
                    <p>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-introduce-item">
              <div className="slider-introduce-content">
                <div className="d-flex justify-content-between align-items-center slider-introduce-item-header">
                  <div>
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                  </div>
                  <p>01/07/2022</p>
                </div>
                <div className="d-flex slider-introduce-item-content">
                  <span>"</span>

                  <p className="slider-introduce-item-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit culpa nulla fugiat mollitia iusto voluptas odio
                    sapiente beatae nemo ad inventore unde deserunt, dolore
                    quidem magnam iste vitae, vero soluta!
                  </p>
                  <span className="align-self-end">"</span>
                </div>
                <div className="d-flex slider-introduce-item-footer align-items-center">
                  <div className="slider-introduce-user-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_ZREcCjUydJs_YhCfVJvsctgxDcJI3dJNw&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3>Sơn Đặng</h3>
                    <p>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-introduce-item">
              <div className="slider-introduce-content">
                <div className="d-flex justify-content-between align-items-center slider-introduce-item-header">
                  <div>
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                    <FontAwesomeIcon icon={faStar} className="icon-star" />
                  </div>
                  <p>01/07/2022</p>
                </div>
                <div className="d-flex slider-introduce-item-content">
                  <span>"</span>

                  <p className="slider-introduce-item-comment">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit culpa nulla fugiat mollitia iusto voluptas odio
                    sapiente beatae nemo ad inventore unde deserunt, dolore
                    quidem magnam iste vitae, vero soluta!
                  </p>
                  <span className="align-self-end">"</span>
                </div>
                <div className="d-flex slider-introduce-item-footer align-items-center ">
                  <div className="slider-introduce-user-img">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_ZREcCjUydJs_YhCfVJvsctgxDcJI3dJNw&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3>Sơn Đặng</h3>
                    <p>Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderInTroDuce;
