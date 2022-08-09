import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import "./stepFive.scss";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import WatchService from "../../../../../../Service/WatchService";

const StepFive = ({
  onPrevious,
  onNext,
  dataNewWatchForm,
  setDataNewWatchForm,
  // data tong

  // resulReference,
  resultListing,

  setShowModalStep,
}) => {
  const dispatch = useDispatch();
  // const [dataCollectionLocal, setDataCollectionLocal] = useState([]);
  let formdata = new FormData();
  const acc = JSON.parse(localStorage.getItem("acc"));
  formdata.append("referenceId", Number(dataNewWatchForm.referenceId));
  console.log("ảnh", dataNewWatchForm.images);
  for (let i in dataNewWatchForm.images) {
    formdata.append("images", dataNewWatchForm.images[i]);
  }

  // formdata.append("images", dataNewWatchForm.images[1]);

  formdata.append("accountId", acc.accountId);
  formdata.append("name", dataNewWatchForm.name);
  formdata.append("retailPrice", dataNewWatchForm.retailPrice);
  formdata.append("yearOfProduction", dataNewWatchForm.yearOfProduction);

  formdata.append("serialNumber", dataNewWatchForm.serialNumber);
  const handleDone = () => {
    console.log("dataform234", formdata);
    const fetchApi = async () => {
      try {
        const result = await WatchService.create(formdata, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
        });

        const resultWatchOne = await WatchService.getOne(
          result.data.watch.watchId,
          {
            headers: {
              Authorization:
                "Bearer" + JSON.parse(localStorage.getItem("token")),
              // Authorization: "Bearer" + `${token}`,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
            },
          }
        );

        dispatch({
          type: "GET_DATA_COLLECTION",
          payload: {
            data: resultWatchOne.data.watch,
            keyListing: dataNewWatchForm,
            dataCreate: result.data.watch,
          },
        });

        // navigate("/", { replace: true });
        setShowModalStep(false);
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  };

  const dataSeller = resultListing.filter(
    (item) => item.watchCondition === dataNewWatchForm.watchCondition
  );

  return (
    <>
      <Form>
        <div className="d-flex step-five-container mb-5">
          <p>Mô tả</p>
          <textarea
            rows="7"
            cols="100"
            className="textarea-input"
            onChange={(e) =>
              setDataNewWatchForm({
                ...dataNewWatchForm,
                sellerDescription: e.target.value,
              })
            }
          >
            Nhập mô tả
          </textarea>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Ten dong ho</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập tên dong ho"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    name: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Năm sản xuất</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập năm sản xuất"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    yearOfProduction: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Tình trạng</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    watchCondition: e.target.value,
                  })
                }
              >
                {resultListing &&
                  resultListing.map((item) => (
                    <option
                      className="input-add-modal"
                      value={item.watchCondition}
                      key={item.listingId}
                    >
                      {item.watchCondition}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">seller</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    sellerId: e.target.value,
                  })
                }
              >
                {dataSeller &&
                  dataSeller.map((item) => (
                    <option
                      className="input-add-modal"
                      value={item.dataSeller}
                      key={item.listingId}
                    >
                      {item.sellerId}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Giá</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập giá sản phẩn"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    retailPrice: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Đơn vị</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                onChange={(e) =>
                  setDataNewWatchForm({
                    ...dataNewWatchForm,
                    currency: e.target.value,
                  })
                }
              >
                {resultListing &&
                  resultListing.map((item) => (
                    <option
                      className="input-add-modal"
                      value={item.currency}
                      key={item.listingId}
                    >
                      {item.currency}
                    </option>
                  ))}
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>

        <div className="d-flex justify-content-end pt-3">
          <Button
            className="btn-add-watch btn-prev"
            onClick={onPrevious}
            // disabled={step === 0}
          >
            Quay Lại
          </Button>

          <Button className="btn-add-watch ms-5" onClick={handleDone}>
            TIẾP THEO
          </Button>
        </div>
      </Form>
      {/* <div className="d-flex justify-content-end pt-3">
        <Button
          className="btn-add-watch btn-prev"
          onClick={onPrevious}
          // disabled={step === 0}
        >
          Quay Lại
        </Button>

        <Button className="btn-add-watch ms-5" onClick={onNext}>
          TIẾP THEO
        </Button>
      </div> */}
    </>
  );
};

export default StepFive;
