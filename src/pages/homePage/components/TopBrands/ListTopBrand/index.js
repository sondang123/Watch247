import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ListTopBrand.scss";
const ListTopBrand = ({ resultBrand, setResultBrand }) => {
  return (
    <div className="show-list-brand">
      <Row>
        {resultBrand.map((item, index) => (
          <Col md={2} className="mb-4" key={index}>
            <div className="item-brand">
              <div className="item-brand-img">
                <img
                  src={"https://dnk.mdcsoftware.com.vn/" + item.logo}
                  alt="brands"
                />
              </div>
              <h5 className="title-item-brand">{item.name}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListTopBrand;
