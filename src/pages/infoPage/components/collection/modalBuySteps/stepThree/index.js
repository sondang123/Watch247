import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/esm/Button";
import "./stepThree.scss";

import { useForm } from "react-hook-form";
import Register from "./../../../../../../components/Header/Register/index";

const StepThree = ({
  onPrevious,
  onNext,

  dataNewWatchForm,
  setDataNewWatchForm,

  dataOneRef,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setDataNewWatchForm({
      ...dataNewWatchForm,
      gender: data.gender,
      caseSize: data.caseSize,
      waterResistance: data.waterResistance,
      dialMaterial: data.dialMaterial,
    });
    onNext();
  };

  return (
    <div className="stepThree-container">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Giới Tính</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("gender")}
              >
                <option className="input-add-modal" value={dataOneRef.gender}>
                  {dataOneRef.gender}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Bề dày (thickness)
              </Form.Label>
            </Col>
            <Col lg={9}>
              <InputGroup>
                <Form.Select
                  aria-label="Default select example"
                  className="input-add-modal"
                  {...register("gender")}
                  value={dataOneRef.caseSize}
                >
                  <option
                    className="input-add-modal"
                    value={dataOneRef.caseSize}
                  >
                    {dataOneRef.caseSize}
                  </option>
                </Form.Select>
                <InputGroup.Text className="input-text-group">
                  mm
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label boder-right-none">
                Đường kính mặt
              </Form.Label>
            </Col>
            <Col lg={9}>
              <InputGroup>
                <Form.Select
                  aria-label="Default select example"
                  className="input-add-modal"
                  // onChange={(e) =>
                  //   setDataNewWatchForm({
                  //     ...dataNewWatchForm,
                  //     caseSize: e.target.value,
                  //   })
                  // }
                >
                  <option className="input-add-modal" value={""}>
                    {}
                  </option>
                </Form.Select>
                <InputGroup.Text className="input-text-group">
                  mm
                </InputGroup.Text>
              </InputGroup>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Kháng nước</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("waterResistance")}
              >
                <option
                  className="input-add-modal"
                  value={dataOneRef.waterResistance}
                >
                  {dataOneRef.waterResistance}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Dial</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("dialMaterial")}
              >
                <option
                  className="input-add-modal"
                  value={dataOneRef.dialMaterial}
                >
                  {dataOneRef.dialMaterial}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Lên dây cót</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("movement")}
              >
                <option className="input-add-modal" value={dataOneRef.movement}>
                  {dataOneRef.movement}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <div className="d-flex justify-content-end pt-3">
          <Button className="btn-add-watch btn-prev" onClick={onPrevious}>
            Quay Lại
          </Button>

          <Button className="btn-add-watch ms-5" type="submit">
            TIẾP THEO
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepThree;
