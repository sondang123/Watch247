import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import modalImg from "../../../../assets/images/modalimg.png";
import "./Modal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  return (
    <div className="modal-container">
      <Container>
        <Row>
          <Col md={7}>
            <img src={modalImg} alt="" className="modal-btn w-100" />
          </Col>
          <Col md={5}>
            <div className="modal-content-text">
              <h3>TRADE ANYTIME ANYWHERE</h3>
              <h4>Powerful platform for easy investing</h4>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
              <button className="btn-modal">
                <FontAwesomeIcon icon={faAppleAlt} className="btn-modal-icon" />
                DOWNLOAD APP
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Modal;
