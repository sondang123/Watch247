import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faEllipsisVertical,
  faHeart,
  faPenToSquare,
  faStar,
  faTag,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import GetData from "./../../../../../../components/GetData/index";
import Form from "react-bootstrap/Form";
import "./collectionViewRow.scss";
import addCollectionImg from "../../../../../../assets/images/add-collection-img.png";
import WatchService from "../../../../../../Service/WatchService";
import ListingService from "./../../../../../../Service/ListingService/index";

const CollectionViewRow = ({
  setModalShow,
  showModalStep,
  setShowModalStep,
}) => {
  // const dataWatch = GetData.GetDataWatch();
  const [layoutProduct, setLayOutProduct] = useState(true);

  // const [dataListing, setdataListing] = useState([]);

  const [statusBuy, setStatusBuy] = useState();
  const dispatch = useDispatch();
  const handleLayoutRow = () => {
    setLayOutProduct(true);
  };

  const handleLayoutColumn = () => {
    setLayOutProduct(false);
  };

  const handleDelete = (watchId) => {
    // const fetchApi = async () => {
    //   try {
    //     const result = await WatchService.delete(watchId, {
    //       headers: {
    //         Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
    //         // Authorization: "Bearer" + `${token}`,
    //         "Content-Type": "application/json; charset=utf-8",
    //         Accept: "application/json",
    //       },
    //     });
    //     // setdataViewCollection([...dataviewCollection, result.data.watch]);
    //     console.log(result);
    //   } catch (err) {
    //     alert(err.message);
    //   }
    // };
    // fetchApi();
    const newDataCollection = dataCollection.filter(
      (item) => item.data.watchId !== watchId
    );

    dispatch({
      type: "DELETE_DATA_COLLECTION",
      payload: newDataCollection,
    });
  };
  const handleUpdate = () => {
    setShowModalStep(true);
  };
  const handleBuy = (item) => {
    console.log("item", item);
    let formData = new FormData();
    formData.append("watchId", item.data.watchId);
    formData.append("sellerId", item.keyListing.sellerId);
    formData.append("watchCondition", item.keyListing.watchCondition);
    formData.append("sellerDescription", item.keyListing.sellerDescription);
    for (let i in item.data.images) {
      formData.append("images", item.data.images[i]);
    }
    formData.append("listingPrice", item.keyListing.retailPrice);
    formData.append("soldPrice", item.keyListing.retailPrice);

    const fetchApi = async () => {
      try {
        const result = await ListingService.create(formData, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });

        setStatusBuy(result);
        dispatch({
          type: "GET_DATA_BUY",
          payload: item,
        });
        alert("đăng bán thành công!");
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  };

  const dataCollection = GetData.GetDataCollection();
  console.log("dataCollection", dataCollection);

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
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={handleLayoutColumn}
          />
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
          {dataCollection.length > 0 &&
            dataCollection.map((item) => (
              <Col className="col-lg-3 col-md-6" key={item.data.watchId}>
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
                    <div
                      className="d-flex item-control align-items-center"
                      onClick={() => handleUpdate(item.data.watchId)}
                    >
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icon-control"
                      />
                      <p>Chỉnh sửa</p>
                    </div>
                    <div
                      className="d-flex item-control align-items-center"
                      onClick={() => handleBuy(item)}
                    >
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
                      {"  "}
                      {item.data.currency}
                    </Card.Text>
                    <div className="d-flexc number-star">
                      <FontAwesomeIcon icon={faStar} className="icon-star" />
                      <span>4.9</span>
                    </div>
                    {statusBuy && statusBuy.status === 20 ? (
                      <Button
                        className="btn-add-watch btn-outline btn-buy-post"
                        // disabled={step === 0}
                      >
                        ĐÃ BÁN
                      </Button>
                    ) : (
                      <Button
                        className="btn-add-watch btn-outline btn-buy-post"
                        // disabled={step === 0}
                        onClick={() => handleBuy(item)}
                      >
                        ĐĂNG BÁN
                      </Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          <Col className="col-lg-3 col-md-6">
            <div className="btn-add-watch-collection">
              <div className="content-btn-add-collection">
                <img src={addCollectionImg} alt="add-img" />
                <Button
                  className="btn-add-watch"
                  onClick={() => setModalShow(true)}
                >
                  ADD A WATCH
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CollectionViewRow;
