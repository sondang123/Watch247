import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faClock,
  faLocationDot,
  faShield,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./ContentDetailProduct.scss";
import Button from "react-bootstrap/Button";

import ModalBuySuccess from "./../ModalBuySuccess";

const ContentDetailProduct = ({ resultDetail }) => {
  const dispatch = useDispatch();

  const [modalShow, setModalShow] = React.useState(false);
  const handleStatus = (listingItem) => {
    if (listingItem.length > 0) {
      switch (listingItem[listingItem.length - 1].status) {
        case "VERIFYING":
          return "Đang Chờ Phê Duyệt";
          break;
        case "HOLDING":
          return "Đang Giữ";
          break;
        case "SOLD":
          return "Đã BÁN";
          break;
        case "VERIFIED":
          return "Đã Xác Minh";
          break;

        default:
          break;
      }
    } else {
      return "Chưa Đăng Bán";
    }
  };

  const handleBuyCart = (resultDetail) => {
    if (
      resultDetail.listings.length > 0 &&
      resultDetail.listings[resultDetail.listings.length - 1].status ===
        "VERIFIED"
    ) {
      setModalShow(true);
      // dispatch({
      //   type: "GET_DATA_CART",
      //   payload: resultDetail,
      // });
    } else {
      alert("SẢn Phẩm Chưa Thể Mua!! ");
    }
  };
  return (
    <div className="detail-product-container">
      {typeof resultDetail !== "undefined" &&
        Object.keys(resultDetail).length > 0 && (
          <>
            <div>
              <h2 className="name-watch">
                {resultDetail.reference.model.brand.name}
              </h2>
              <p className="detail-price">
                {resultDetail.currency === "USD"
                  ? resultDetail.retailPrice * 23000
                  : resultDetail.retailPrice}
                VND
              </p>
              <span className="detail-price-dola">
                ${" "}
                {resultDetail.currency === "USD"
                  ? resultDetail.retailPrice
                  : (resultDetail.retailPrice / 23000).toFixed(2)}
              </span>
              <div className="d-flex verification">
                <div className="d-flex align-items-center ">
                  <p>DnK Vietnam</p>
                  <span>
                    <FontAwesomeIcon
                      icon={faShield}
                      className="verification-icon"
                    />
                  </span>
                </div>
                <div className="verified">
                  {handleStatus(resultDetail.listings)}
                </div>
              </div>
              <div className="d-flex align-items-center evaluate">
                <div className="d-flex align-items-center evaluate-number">
                  <FontAwesomeIcon icon={faStar} className="icon-star" />
                  <p>4.98</p>
                  <span>(230)</span>
                </div>
                <div className="d-flex align-items-center time-online">
                  <FontAwesomeIcon icon={faClock} className="icon-clock" />
                  <p>Online 1 giờ trước</p>
                </div>
                <div className="d-flex align-items-center address">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="icon-address"
                  />
                  <p>Hà Nội</p>
                </div>
              </div>
            </div>
            <div className="buy-btn-group">
              <Button
                className="w-100 buy-btn color-btn-buy"
                onClick={() => handleBuyCart(resultDetail)}
              >
                Mua Ngay
              </Button>
              <Button className="w-100 mt-4 buy-btn color-btn-contact">
                LIÊN HỆ VỚI NGƯỜI BÁN
              </Button>
              <ModalBuySuccess
                show={modalShow}
                onHide={() => setModalShow(false)}
                resultDetail={resultDetail}
              />
            </div>
          </>
        )}
      <div className="policy">
        <div className="policy-content">
          <h3>Chính sách bảo vệ người mua</h3>
          <div className="policy-list">
            <div className="d-flex align-items-center policy-item">
              <div className="policy-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="d-flex align-items-center policy-item">
              <div className="policy-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="d-flex align-items-center policy-item">
              <div className="policy-avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </div>
          <span className="learn-more">Learn more</span>
        </div>
      </div>
    </div>
  );
};

export default ContentDetailProduct;
