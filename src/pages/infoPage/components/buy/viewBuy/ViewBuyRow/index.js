import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetData from "./../../../../../../components/GetData/index";
import {
  faBars,
  faEllipsisVertical,
  faHeart,
  faPenToSquare,
  faStar,
  faTag,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ViewBuyRow = () => {
  const dispatch = useDispatch();
  const handleLayoutRow = () => {};

  const handleLayoutColumn = () => {};
  const dataBuy = GetData.GetDataBuy();
  console.log("dataBuy", dataBuy);
  const handleDelete = (watchId) => {
    const newDataBuy = dataBuy.filter((item) => item.data.watchId !== watchId);
    console.log("newDataBuy", newDataBuy);
    dispatch({
      type: "DELETE_DATA_BUY",
      payload: newDataBuy,
    });
  };

  return (
    <div className="product-view-list collection-view-row">
      <div className="d-flex justify-content-between view-product-header header-colection flex-wrap">
        <div className="d-flex align-items-center view-product-controls ">
          <p>View</p>
          <span className="icon-grid" onClick={handleLayoutRow}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
          <FontAwesomeIcon icon={faBars} className="icon-bars" />
        </div>
        <div className="d-flex w-lg-25 align-items-center">
          <p className="w-100">Sắp xếp theo:</p>
          <Form.Select
            aria-label="Default select example"
            className="select-filter-view"
          >
            <option>Sự liên quan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>

      <div className="content-colection-view">
        <Row className="gy-4">
          {dataBuy.length > 0 &&
            typeof dataBuy !== "undefined" &&
            dataBuy.map((item, index) => (
              <Col className="col-lg-3 col-md-6" key={index}>
                <Card className="product-item position-relative">
                  <div className="product-item-img">
                    <Card.Img
                      variant="top"
                      src={
                        item.data.images &&
                        "https://dnk.mdcsoftware.com.vn/" + item.data.images[0]
                      }
                    />
                  </div>
                  <div className="collection-control-buy">
                    <div className="d-flex item-control align-items-center">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-control"
                      />
                      <p>Chỉnh sửa</p>
                    </div>
                    <div className="d-flex item-control align-items-center">
                      <FontAwesomeIcon icon={faTag} className="icon-control" />
                      <p>Đăng bán</p>
                    </div>
                    <div
                      className="d-flex item-control align-items-center"
                      onClick={() => handleDelete(item.data.watchId)}
                    >
                      <FontAwesomeIcon
                        icon={faTrashCan}
                        className="icon-control"
                      />
                      <p>Xóa</p>
                    </div>
                  </div>
                  <Card.Body>
                    <Card.Title>
                      {item.data.reference.model.brand.name}
                    </Card.Title>
                    <Card.Text className="sub-title">
                      {item.data.reference.model.name}
                    </Card.Text>
                    <Card.Text className="product-price">
                      {item.data.retailPrice}
                      {item.data.currency}
                    </Card.Text>
                    <div className="d-flexc number-star">
                      <FontAwesomeIcon icon={faStar} className="icon-star" />
                      <span>4.9</span>
                    </div>

                    <Button
                      className="btn-add-watch btn-outline btn-buy-post"
                      // disabled={step === 0}
                    >
                      ĐĂNG BÁN
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div>
  );
};

export default ViewBuyRow;
