import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import "./modalBuy.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalSteps from "../modalBuySteps";

const ModalBuy = ({
  modalShow,
  setModalShow,
  resulReference,
  setResultReference,
  setSearchReference,
  dataNewWatchForm,
  setDataNewWatchForm,

  resultListing,
  showModalStep,
  setShowModalStep,
  dataOneRef,
}) => {
  const [showlistRef, setShowListRef] = useState(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const handleShowStep = () => {
    setShowModalStep(true);
    setModalShow(false);
  };
  const handleCloseModal = () => {
    setModalShow(false);
  };

  const onSubmit = (data) => {
    // console.log(data);
    // setDataNewWatchForm({ ...dataNewWatchForm, listings: [watch(data)] });
    handleShowStep();
  };

  const handleChangeRef = (referenceId) => {
    setDataNewWatchForm({
      ...dataNewWatchForm,
      referenceId: referenceId,
    });
    setResultReference([]);
  };

  return (
    <div>
      {modalShow && (
        <Modal
          show
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-add-container"
        >
          <div className="modal-add-header position-relative">
            <h2>Thêm sản phẩm mới</h2>
            <Button onClick={handleCloseModal} className="btn-close-modal">
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
          <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicEmail"
              >
                <Form.Label className="modal-add-label">
                  Nhập tên hàng, Model, Ref ...*
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên hàng, Model, Ref ...*"
                  className="input-add-modal"
                  onChange={(e) => setSearchReference(e.target.value)}
                />
                {resulReference.length > 0 && (
                  <div className="select-ref">
                    {resulReference &&
                      resulReference.map((item) => (
                        <div
                          className="select-item"
                          key={item.referenceId}
                          onClick={() => handleChangeRef(item.referenceId)}
                        >
                          {item.referenceId}
                        </div>
                      ))}
                  </div>
                )}
              </Form.Group>
              <Form.Group
                className="mb-3 position-relative"
                controlId="formBasicEmail"
              >
                <Form.Label className="modal-add-label">
                  Reference number
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên hàng, Model, Ref ...*"
                  className="input-add-modal"
                  value={dataNewWatchForm.referenceId}
                  onChange={(e) =>
                    setDataNewWatchForm({
                      ...dataNewWatchForm,
                      referenceId: e.target.value,
                    })
                  }
                />
              </Form.Group>

              {"referenceId" in dataNewWatchForm && dataOneRef ? (
                <Button
                  className="btn-add-watch btn-next"
                  // onClick={handleShowStep}
                  type="submit"
                >
                  TIẾP THEO
                </Button>
              ) : (
                <Button
                  className="btn-add-watch btn-next"
                  // onClick={handleShowStep}
                  // type="submit"
                  disabled
                >
                  TIẾP THEO
                </Button>
              )}
            </Form>
          </div>
        </Modal>
      )}
      <ModalSteps
        showModalStep={showModalStep}
        setShowModalStep={setShowModalStep}
        setModalShow={setModalShow}
        // data resulReference
        resulReference={resulReference}
        // data from
        dataNewWatchForm={dataNewWatchForm}
        setDataNewWatchForm={setDataNewWatchForm}
        // data tổng

        resultListing={resultListing}
        dataOneRef={dataOneRef}
      />
    </div>
  );
};

export default ModalBuy;
