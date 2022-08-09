import { faCamera, faPen, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./stepTwo.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";

const StepTwo = ({
  onPrevious,
  onNext,
  dataNewWatchForm,
  setDataNewWatchForm,
}) => {
  const [selectImg, setSelectImg] = useState([]);
  const onImageChange = (e) => {
    let file = e.target.files;
    console.log(file);
    const listImg = [];
    for (let i = 0; i < file.length; i++) {
      // listImg.push(URL.createObjectURL(file[i]));
      listImg.push(file[i]);
    }
    // console.log("list", selectImg);
    setSelectImg([...selectImg, ...listImg]);
  };

  const handledeleteFile = (index) => {
    const newselect = selectImg.filter(
      (item) => selectImg.indexOf(item) !== index
    );
    setSelectImg(newselect);
  };
  const onUpdateChange = (e, index) => {
    const fileImg = URL.createObjectURL(e.target.files[0]);
    const newselectImg = [...selectImg];
    newselectImg[index] = fileImg;

    setSelectImg(newselectImg);
  };
  const handleNext = () => {
    setDataNewWatchForm({ ...dataNewWatchForm, images: selectImg });
    onNext();
  };
  return (
    <div className="step-two-wrapper">
      <Row className="gx-4">
        {selectImg.length > 0 &&
          selectImg.map((item, index) => (
            <Col lg={4} className="mb-5 position-relative" key={index}>
              <div className="step-two-image ">
                <img
                  // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRiflUs7LEURyA5wvhJq71O_z_IARWckzS9w&usqp=CAU"
                  src={item}
                  alt="watch-img"
                />
                <div className="close-btn-icon">
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="icon-close"
                    onClick={() => handledeleteFile(index)}
                  />
                  <span className="position-relative update-file">
                    <FontAwesomeIcon icon={faPen} className="icon-pen" />
                    <input
                      type="file"
                      className="input-file-update"
                      onChange={(e) => onUpdateChange(e, index)}
                    />
                  </span>
                </div>
              </div>
            </Col>
          ))}

        <Col lg={4}>
          <div className="step-two-container position-relative">
            <FontAwesomeIcon icon={faCamera} className="icon-camera" />
            <span className=" text-choose-file">
              <span className="color-select-file">Select files </span>
              <span> or drag and drop</span>
            </span>
            <input
              type="file"
              className="input-choo-file"
              multiple="multiple"
              onChange={onImageChange}
            />
          </div>
        </Col>
      </Row>
      <div className="d-flex justify-content-end pt-3">
        <Button
          className="btn-add-watch btn-prev"
          onClick={onPrevious}
          // disabled={step === 0}
        >
          Quay Lại
        </Button>

        <Button className="btn-add-watch ms-5" onClick={handleNext}>
          TIẾP THEO
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
