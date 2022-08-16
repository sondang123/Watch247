import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pagination from "react-bootstrap/Pagination";
import {
  faHeart,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./ProductViewClumn.scss";
import GetData from "../../../../../components/GetData";
import { Link } from "react-router-dom";
import WatchService from "./../../../../../Service/WatchService/index";

const ProductViewColumn = ({
  dataViewLike,
  setDataApiLike,
  dataSearchWatch,
}) => {
  const handleFilterLike = (item) => {
    if (dataViewLike && dataViewLike.length > 0) {
      for (let i of dataViewLike) {
        if (i.watchId === item.watchId) {
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
    // if (dataViewLike && dataViewLike.length > 0) {
    // }
    for (let i of dataViewLike) {
      if (i.watchId === item.watchId) {
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
            return;
          } catch (error) {}
        };
        fetchApi();
        return;
      }
    }
    const fetchApi = async () => {
      try {
        const result = await WatchService.like(item.watchId, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        alert("Đã Like !");
        setDataApiLike(result);
        // return;
      } catch (error) {}
    };
    fetchApi();
  };

  return (
    <div className="product-view-column-container">
      {dataSearchWatch &&
        Object.keys(dataSearchWatch).length > 0 &&
        dataSearchWatch.watches.map((item) => (
          <Link to={`/detailproduct/${item.watchId}`} key={item.watchId}>
            <Row className="gx-0 product-view-column-item">
              <Col md={3}>
                <div className="watch-img-product">
                  <img
                    src={
                      item.images &&
                      "https://dnk.mdcsoftware.com.vn/" + item.images[0]
                    }
                    alt="watch-img-product"
                    //   className="watch-img-product"
                  />
                </div>
              </Col>

              <Col md={9} className="bg-white">
                <div className="product-column-content">
                  <div className="d-flex justify-content-between product-column-header">
                    <h3>{item.reference.model.brand.name}</h3>
                    {/* <FontAwesomeIcon icon={faHeart} className="icon-heart" /> */}
                    {handleFilterLike(item)}
                  </div>
                  <Row>
                    <Col md={3} xs={6}>
                      <ul className="name-product-title color-name-product-title">
                        <li>Movement:</li>
                        <li>Case material:</li>
                        <li>Year of production:</li>
                        <li>Condition:</li>
                      </ul>
                    </Col>
                    <Col md={3} xs={6}>
                      <ul className="name-product-title color-name-product-content">
                        <li>{item.reference.movement}</li>
                        <li>{item.reference.caseMaterial}</li>
                        <li>{item.yearOfProduction}</li>
                        <li>{}</li>
                      </ul>
                    </Col>
                    <Col md={3} xs={6}>
                      <ul className="name-product-title color-name-product-title">
                        <li>Reference number:</li>
                        <li>Scope of delivery:</li>
                        <li>Location:</li>
                        <li>Case diameter:</li>
                      </ul>
                    </Col>
                    <Col md={3} xs={6}>
                      <ul className="name-product-title color-name-product-content">
                        <li>{item.serialNumber}</li>
                        <li>{}</li>
                        <li>{}</li>
                        <li>{item.reference.caseSize}</li>
                      </ul>
                    </Col>
                  </Row>
                  <div>
                    <Row className="align-items-center">
                      <Col>
                        <h3 className="product-column-price">
                          {item.retailPrice} {item.currency}
                        </h3>
                      </Col>
                      <Col>
                        <div className="d-flex address-star">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="icon-star"
                          />
                          <p>4.98</p>
                          <span className="number-in-turn">(230)</span>
                          <span className="address-watch">
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="icon-location-dot"
                            />
                            HÀ Nội
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Link>
        ))}
    </div>
  );
};

export default ProductViewColumn;
