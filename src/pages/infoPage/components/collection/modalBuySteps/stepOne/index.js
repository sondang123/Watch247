import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";

const StepOne = ({
  handlePrev,
  onNext,
  dataNewWatchForm,
  setDataNewWatchForm,
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
      brand: data.brand,
      model: data.model,
    });
    onNext();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="modal-add-label">Thương Hiệu</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="input-add-modal"
            {...register("brand")}
          >
            <option
              className="input-add-modal"
              value={dataOneRef.model.brand.name}
            >
              {dataOneRef.model.brand.name}
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="modal-add-label">Model*</Form.Label>
          <Form.Select
            aria-label="Default select example"
            className="input-add-modal"
            {...register("model")}
          >
            <option className="input-add-modal" value={dataOneRef.model.name}>
              {dataOneRef.model.name}
            </option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="modal-add-label">
            Nhập số seri number
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập số seri Number..."
            className="input-add-modal"
            onChange={(e) =>
              setDataNewWatchForm({
                ...dataNewWatchForm,
                serialNumber: e.target.value,
              })
            }
          />
        </Form.Group>

        <div className="d-flex justify-content-end pt-3">
          <Button className="btn-add-watch btn-prev" onClick={handlePrev}>
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

export default StepOne;
