import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalvideo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

const ModalVideo = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-video-container"
      >
        {props.dataDetailVideo && (
          <>
            <Modal.Header className="border-0">
              <Modal.Title id="contained-modal-title-vcenter">
                <div onClick={props.onHide} className="header-modal-video">
                  <FontAwesomeIcon icon={faLeftLong} className="btn-left" />

                  <span className="video-name">
                    {props.dataDetailVideo.title}
                  </span>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="content-video">
                <video
                  controls
                  className="content-video-view"
                  src={
                    "https://dnk.mdcsoftware.com.vn/" +
                    props.dataDetailVideo.link
                  }
                ></video>
              </div>
            </Modal.Body>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModalVideo;
