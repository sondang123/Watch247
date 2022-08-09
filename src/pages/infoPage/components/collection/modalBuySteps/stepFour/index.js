import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";

const StepFour = ({
  onPrevious,
  onNext,
  dataNewWatchForm,
  setDataNewWatchForm,
  // data tong

  resulReference,

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
      braceletMaterial: data.braceletMaterial,
      caseBack: data.caseBack,
      bezelMaterial: data.bezelMaterial,
      claspType: data.claspType,
    });
    onNext();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Chất liệu dây đeo
              </Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("braceletMaterial")}
              >
                <option
                  className="input-add-modal"
                  value={dataOneRef.braceletMaterial}
                >
                  {dataOneRef.braceletMaterial}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Màu sắc dây đeo
              </Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
              >
                <option className="input-add-modal" value={""}>
                  {}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Chất liệu mặt</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("caseBack")}
              >
                <option className="input-add-modal" value={dataOneRef.caseBack}>
                  {dataOneRef.caseBack}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">Màu sắc mặt</Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
              >
                <option className="input-add-modal">chọn</option>
                <option className="input-add-modal" value="1">
                  One
                </option>
                <option className="input-add-modal" value="2">
                  Two
                </option>
                <option className="input-add-modal" value="3">
                  Three
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Chất liệu kính
              </Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
              >
                <option
                  className="input-add-modal"
                  value={dataOneRef.bezelMaterial}
                >
                  {dataOneRef.bezelMaterial}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Móc cài (clasp)
              </Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
                {...register("claspType")}
              >
                <option
                  className="input-add-modal"
                  values={dataOneRef.claspType}
                >
                  {dataOneRef.claspType}
                </option>
              </Form.Select>
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Row className="align-items-center">
            <Col lg={3}>
              <Form.Label className="modal-add-label">
                Chất liệu móc cài
              </Form.Label>
            </Col>
            <Col lg={9}>
              <Form.Select
                aria-label="Default select example"
                className="input-add-modal"
              >
                <option className="input-add-modal">chọn</option>
                <option className="input-add-modal" value="1">
                  One
                </option>
                <option className="input-add-modal" value="2">
                  Two
                </option>
                <option className="input-add-modal" value="3">
                  Three
                </option>
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

          <Button className="btn-add-watch ms-5" type="submit">
            TIẾP THEO
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default StepFour;
