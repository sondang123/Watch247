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

const ProductViewColumn = ({
  queryFilter,
  setQueryFilter,
  setDataViewWatch,
  dataViewWatch,
}) => {
  const dataWatch = GetData.GetDataWatch();
  console.log("dataWatch", dataWatch);

  return (
    <div className="product-view-column-container">
      {dataViewWatch &&
        dataViewWatch.watches.map((item) => (
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
                    <FontAwesomeIcon icon={faHeart} className="icon-heart" />
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
