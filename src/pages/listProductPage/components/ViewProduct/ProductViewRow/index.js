import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import "./ProductViewRow.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faStar } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import GetData from "../../../../../components/GetData";
import { useDispatch, useSelector } from "react-redux";
import WatchService from "./../../../../../Service/WatchService/index";

const ProductViewRow = ({
  dataViewLike,
  setDataApiLike,
  dataRender,
  setDataRender,
}) => {
  const dispatch = useDispatch();

  const acc = JSON.parse(localStorage.getItem("acc"));
  const dataWatch = GetData.GetDataWatch();

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

  const dataViewRender = GetData.GetDataMyFavorite();

  return (
    <div className="product-view-list">
      <div className="">
        <Row className="gy-4">
          {dataRender &&
            typeof dataRender !== "undefined" &&
            dataRender.map((item) => (
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
                    <div>{handleFilterLike(item)}</div>
                    <Card.Body>
                      <Card.Title>{item.reference.model.brand.name}</Card.Title>
                      <Card.Text className="sub-title">
                        {item.reference.model.name}
                      </Card.Text>
                      <Card.Text className="product-price">
                        {item.retailPrice} {item.currency}
                      </Card.Text>
                      <div className="d-flex number-star align-items-center">
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
