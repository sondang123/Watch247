import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GetData from "./../../../../../../components/GetData/index";
import WatchService from "./../../../../../../Service/WatchService/index";
import { Link } from "react-router-dom";
import {
  faBars,
  faEllipsisVertical,
  faHeart,
  faPenToSquare,
  faStar,
  faTag,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ViewLikeRow = () => {
  const dispatch = useDispatch();
  const [dataViewLike, setDataViewLike] = useState();
  const [dataUnLike, setDataUnLike] = useState();
  const handleLayoutRow = () => {};

  const handleLayoutColumn = () => {};

  const dataMyFavorite = GetData.GetDataMyFavorite();
  const acc = JSON.parse(localStorage.getItem("acc"));

  useEffect(() => {
    const fetchApi = async () => {
      const result = await WatchService.getFavorite(acc.accountId, {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });

      setDataViewLike(result.data.favourites);
    };
    fetchApi();
  }, [dataUnLike]);
  console.log("dataViewLike", dataViewLike);
  const handleUnLike = (e, item) => {
    e.preventDefault();
    e.stopPropagation();

    const fetchApi = async () => {
      try {
        const result = await WatchService.UnLike(item.watchId, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        alert("Đã UnLike !");
        setDataUnLike(result);
      } catch (error) {}
    };
    fetchApi();

    // dispatch({
    //   type: "GET_DATA_MYFAVOURITE",
    //   payload: item,
    // });
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
        {dataViewLike && dataViewLike.length > 0 ? (
          <Row className="gy-4">
            {dataViewLike &&
              typeof dataViewLike !== "undefined" &&
              dataViewLike.map((item) => (
                <Col className="col-lg-3 col-md-6 col-12" key={item.watchId}>
                  <Link to={`/detailproduct/${item.watchId}`}>
                    <Card className="product-item">
                      <div className="product-item-img">
                        <Card.Img
                          variant="top"
                          src={
                            item.watch.images &&
                            item.watch.images[0].startsWith("blob:http://")
                              ? item.watch.images[0]
                              : item.watch.images &&
                                "https://dnk.mdcsoftware.com.vn/" +
                                  item.watch.images[0]
                          }
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="icon-heart"
                          style={{ color: "red" }}
                          onClick={(e) => handleUnLike(e, item)}
                        />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          {item.watch.reference.model.brand.name}
                        </Card.Title>
                        <Card.Text className="sub-title">
                          {item.watch.reference.model.name}
                        </Card.Text>
                        <Card.Text className="product-price">
                          {item.watch.retailPrice} {item.watch.currency}
                        </Card.Text>
                        <div className="d-flexc number-star">
                          <FontAwesomeIcon
                            icon={faStar}
                            className="icon-star"
                          />
                          <span>4.9</span>
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
          </Row>
        ) : (
          <div className="collection-wrapper">
            <div className="d-flex align-items-center flex-column justify-content-center collection-container">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS745zWjgsWkqHKZiOWEEpeXMeUHifzO_SD7Q&usqp=CAU"
                  alt=""
                />
              </div>
              <h2 className="title-no-items">chưa có đồng hồ nào</h2>
              <p className="sub-title-no-items">
                Hiện tại bạn chưa có sản phẩm yêu thích nào, hãy bắt đầu khám
                phá và thêm vào danh sách những nẫu đồng hồ yêu thích của bạn
                nha.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewLikeRow;
