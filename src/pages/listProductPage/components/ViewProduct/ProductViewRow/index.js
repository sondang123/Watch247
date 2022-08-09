import React, { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import "./ProductViewRow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import GetData from "../../../../../components/GetData";

const ProductViewRow = ({
  // setDataViewWatch,
  // dataViewWatch,
  dataFilterWatch,
}) => {
  // const dataAppointment = GetData.GetDataAppointment();
  const dataWatch = GetData.GetDataWatch();

  return (
    <div className="product-view-list">
      <div className="">
        <Row className="gy-4">
          {dataFilterWatch &&
            typeof dataFilterWatch !== "undefined" &&
            dataFilterWatch.map((item) => (
              <Col className="col-lg-3 col-md-6 col-12" key={item.watchId}>
                <Link to={`/detailproduct/${item.watchId}`}>
                  <Card className="product-item">
                    <div className="product-item-img">
                      <Card.Img
                        variant="top"
                        src={
                          item.images &&
                          item.images[0].startsWith("blob:http://")
                            ? item.images[0]
                            : item.images &&
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
                        {item.retailPrice} {item.currency}
                      </Card.Text>
                      <div className="d-flexc number-star">
                        <FontAwesomeIcon icon={faStar} className="icon-star" />
                        <span>4.9</span>
                      </div>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductViewRow;
