import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./SliderDetaiProduct.scss";

const SliderDetaiProduct = ({ resultDetail }) => {
  return (
    <div className="SliderDetaiProduct">
      <Carousel
        showStatus={false}
        swipeable={true}
        autoFocus={true}
        // showArrows={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {resultDetail &&
          resultDetail.images &&
          typeof resultDetail.images !== "undefined" &&
          resultDetail.images.map((item, index) => (
            <div className="Slider-img" key={index}>
              <img
                src={
                  item && item.startsWith("blob:http://")
                    ? item
                    : "https://dnk.mdcsoftware.com.vn/" + item
                }
              />
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default SliderDetaiProduct;
