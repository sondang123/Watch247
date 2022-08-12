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
import WatchService from "./../../../../Service/WatchService/index";

const SliderProduct = ({ dataViewLike, dataApiLike, setDataApiLike }) => {
  // const dataWatch = GetData.GetDataWatch();
  const [resultTopProduct, setResultTopProduct] = useState([]);
  const [dataRender, setDataRender] = useState();

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

      const list = [];
      for (let i of result.data.topWatches) {
        list.push({ ...i, like: false });
      }

      setDataRender(list);
    };
    fetchApi();
  }, [dataApiLike]);

  const handleFilterLike = (item) => {
    if (dataViewLike && dataViewLike.length > 0) {
      const dataRenderCoppy = [...dataRender];
      for (let i of dataViewLike) {
        if (i.watchId === item.watchId) {
          const objIndex = dataRenderCoppy.findIndex(
            (list) => list.watchId === item.watchId
          );

          dataRenderCoppy[objIndex].like = true;
          // setDataRender([...dataRender], [dataRenderCoppy[objIndex]]);
          return (
            <FontAwesomeIcon
              icon={faHeart}
              className="icon-heart"
              style={{ color: "red" }}
              onClick={(e) => handleMyFavorite(e, item)}
            />
          );
          break;
        }
      }
    }

    return (
      <FontAwesomeIcon
        icon={faHeart}
        className="icon-heart"
        onClick={(e) => handleMyFavorite(e, item)}
      />
    );
  };
  const handleMyFavorite = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    if (item.like === false) {
      const dataRenderCoppy = [...dataRender];
      const objIndex = dataRenderCoppy.findIndex(
        (list) => list.watchId === item.watchId
      );
      dataRenderCoppy[objIndex].like = true;
      setDataRender([...dataRender], [dataRenderCoppy[objIndex]]);

      const fetchApi = async () => {
        try {
          const result = await WatchService.like(item.watchId, {
            headers: {
              Authorization:
                "Bearer" + JSON.parse(localStorage.getItem("token")),
              // Authorization: "Bearer" + `${token}`,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
            },
          });
          alert("Đã Like !");
          setDataApiLike(result);
        } catch (error) {}
      };
      fetchApi();
    } else if (item.like === true) {
      const dataRenderCoppy = [...dataRender];
      const objIndex = dataRenderCoppy.findIndex(
        (list) => list.watchId === item.watchId
      );
      dataRenderCoppy[objIndex].like = false;
      setDataRender([...dataRender], [dataRenderCoppy[objIndex]]);

      const fetchApi = async () => {
        try {
          const result = await WatchService.UnLike(item.watchId, {
            headers: {
              Authorization:
                "Bearer" + JSON.parse(localStorage.getItem("token")),
              // Authorization: "Bearer" + `${token}`,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
            },
          });
          alert("Đã UnLike !");
          setDataApiLike(result);
        } catch (error) {}
      };
      fetchApi();
    }
  };

  return (
    <div className="slider-product">
      {/* <h2 className="slider-product-title">Gợi ý cho bạn</h2> */}
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={5}
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
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {dataRender &&
          dataRender.map((item) => (
            <SwiperSlide key={item.watchId}>
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
                    {/* <FontAwesomeIcon icon={faHeart} className="icon-heart" /> */}
                    <div>{handleFilterLike(item)}</div>
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
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderProduct;
