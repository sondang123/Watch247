import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import AppointmentService from "./../../../../../../Service/AppointmentService/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetData from "./../../../../../../components/GetData/index";

import ModelDetailBuy from "./../../ModelDetailBuy/index";
import {
  faBars,
  faEllipsisVertical,
  faHeart,
  faPenToSquare,
  faStar,
  faTag,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const PurchaseHistoryRow = () => {
  const handleLayoutRow = () => {};

  const handleLayoutColumn = () => {};
  const dataCart = GetData.GetDataCart();
  // console.log("data info cart", dataCart);
  const [modalShowDetailBuy, setModalShowDetailBuy] = React.useState(false);
  const [dataDetailBuy, setDataDetailBuy] = React.useState([]);
  // const dataCart = JSON.parse(localStorage.getItem("buyCart"));
  // const dataAppointment = GetData.GetDataAppointment();
  // console.log("data appointment", dataAppointment);
  const handleShow = (item) => {
    setModalShowDetailBuy(true);
    setDataDetailBuy(item);
  };
  const handleStatus = (status) => {
    switch (status) {
      case "UNMEET":
        return "Chưa Gặp";

        break;

      default:
        break;
    }
  };
  const dataAppointment = GetData.GetDataAppointment();

  return (
    <div className="product-view-list collection-view-row">
      {dataCart && dataCart.length > 0 ? (
        <>
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
              {dataCart &&
                typeof dataCart !== "undefined" &&
                dataCart.map((item, index) => (
                  <Col
                    className="col-lg-3 col-md-6"
                    // onClick={() => setModalShowDetailBuy(true)}
                    onClick={() => handleShow(item)}
                    key={index}
                  >
                    <Card className="product-item position-relative">
                      <div className="product-item-img">
                        <Card.Img
                          variant="top"
                          src={
                            "https://dnk.mdcsoftware.com.vn/" + item.images[0]
                          }
                        />
                      </div>
                      {/* <div className="collection-control-buy">
                        <div className="d-flex item-control align-items-center">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="icon-control"
                          />
                          <p>Chỉnh sửa</p>
                        </div>
                        <div className="d-flex item-control align-items-center">
                          <FontAwesomeIcon
                            icon={faTag}
                            className="icon-control"
                          />
                          <p>Đăng bán</p>
                        </div>
                        <div className="d-flex item-control align-items-center">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="icon-control"
                          />
                          <p>Xóa</p>
                        </div>
                      </div> */}
                      <div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="icon-heart"
                        />
                      </div>
                      <div>
                        <div>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className="icon-heart"
                          />
                        </div>
                      </div>
                      <Card.Body>
                        <Card.Title>
                          {item.reference.model.brand.name}
                        </Card.Title>
                        <Card.Text className="sub-title">
                          {item.reference.model.name}
                        </Card.Text>
                        <Card.Text className="product-price">
                          {item.retailPrice}
                          {item.currency}
                        </Card.Text>
                        <div className="d-flexc number-star">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="icon-star"
                          />
                          <span>4.9</span>
                        </div>

                        <Button
                          className="btn-add-watch btn-outline btn-buy-post"
                          // disabled={step === 0}
                        >
                          {/* ĐĂNG BÁN */}
                          {handleStatus(dataAppointment.status)}
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              <ModelDetailBuy
                show={modalShowDetailBuy}
                dataDetailBuy={dataDetailBuy}
                onHide={() => setModalShowDetailBuy(false)}
              />
            </Row>
          </div>
        </>
      ) : (
        <div className="collection-wrapper">
          <div className="d-flex align-items-center flex-column justify-content-center collection-container">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS745zWjgsWkqHKZiOWEEpeXMeUHifzO_SD7Q&usqp=CAU"
                alt=""
              />
            </div>
            <h2 className="title-no-items">
              you haven’t purchased any watches yet
            </h2>
            <p className="sub-title-no-items">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistoryRow;
