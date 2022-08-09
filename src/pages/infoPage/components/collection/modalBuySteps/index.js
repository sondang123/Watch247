import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Panel, Steps } from "rsuite";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
import "./modalBuySteps.scss";

import "rsuite/dist/rsuite.min.css";
import StepOne from "./stepOne";
import StepTwo from "./StepTwo";
import StepThree from "./stepThree";
import StepFour from "./stepFour";
import StepFive from "./StepFive";

const ModalSteps = ({
  showModalStep,
  setShowModalStep,
  setModalShow,
  dataNewWatchForm,
  setDataNewWatchForm,
  resulReference,
  resultListing,
  dataOneRef,
}) => {
  const handleShowStep = () => {
    setShowModalStep(false);
  };
  const handlePrev = () => {
    setModalShow(true);
    setShowModalStep(false);
  };

  const [step, setStep] = useState(0);
  const onChange = (nextStep) => {
    setStep(nextStep < 0 ? 0 : nextStep > 4 ? 4 : nextStep);
  };

  const onNext = () => onChange(step + 1);
  const onPrevious = () => onChange(step - 1);
  return (
    <div>
      {showModalStep && (
        <Modal
          show
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          className="modal-add-container modal-step-container"
        >
          <div className="modal-add-header position-relative">
            <h2>Thêm sản phẩm mới</h2>
            <Button className="btn-close-modal" onClick={handleShowStep}>
              <FontAwesomeIcon icon={faXmark} />
            </Button>
          </div>
          <div>
            <Steps current={step}>
              <Steps.Item title="Bước 1" />
              <Steps.Item title="Bước 2" />
              <Steps.Item title="Bước 3" />
              <Steps.Item title="Bước 4" />
              <Steps.Item title="Bước 5" />
            </Steps>

            {step === 0 && (
              <Panel className="step-body-content">
                <StepOne
                  handlePrev={handlePrev}
                  onNext={onNext}
                  dataNewWatchForm={dataNewWatchForm}
                  setDataNewWatchForm={setDataNewWatchForm}
                  resulReference={resulReference}
                  dataOneRef={dataOneRef}
                />
              </Panel>
            )}
            {step === 1 && (
              <Panel className="step-body-content">
                <StepTwo
                  onPrevious={onPrevious}
                  onNext={onNext}
                  dataNewWatchForm={dataNewWatchForm}
                  setDataNewWatchForm={setDataNewWatchForm}
                  dataOneRef={dataOneRef}
                />
              </Panel>
            )}
            {step === 2 && (
              <Panel className="step-body-content">
                <StepThree
                  onPrevious={onPrevious}
                  onNext={onNext}
                  dataNewWatchForm={dataNewWatchForm}
                  setDataNewWatchForm={setDataNewWatchForm}
                  resulReference={resulReference}
                  dataOneRef={dataOneRef}
                />
              </Panel>
            )}
            {step === 3 && (
              <Panel className="step-body-content">
                <StepFour
                  onPrevious={onPrevious}
                  onNext={onNext}
                  dataNewWatchForm={dataNewWatchForm}
                  setDataNewWatchForm={setDataNewWatchForm}
                  resulReference={resulReference}
                  dataOneRef={dataOneRef}
                />
              </Panel>
            )}
            {step === 4 && (
              <Panel className="step-body-content">
                <StepFive
                  onPrevious={onPrevious}
                  onNext={onNext}
                  dataNewWatchForm={dataNewWatchForm}
                  setDataNewWatchForm={setDataNewWatchForm}
                  resultListing={resultListing}
                  setShowModalStep={setShowModalStep}
                  dataOneRef={dataOneRef}
                />
              </Panel>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ModalSteps;
