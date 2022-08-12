import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./searchvideo.scss";

const SearchVideo = ({ setDataVideoRender, dataVideo }) => {
  const handleChange = (e) => {
    const dataView =
      dataVideo &&
      dataVideo.filter((item) =>
        item.title.toUpperCase().includes(e.target.value.toUpperCase())
      );

    setDataVideoRender(dataView);
  };
  return (
    <div>
      <div className="mb-4 search-video-container">
        <Form>
          <div className="d-flex align-items-center justify-content-end flex-wrap">
            <Form.Group
              className="mb-3 d-flex   align-items-center item-control-video"
              controlId="formBasicEmail"
            >
              <div className="w-50">sắp xếp theo</div>
              <Form.Select aria-label="Default select example" className="p-4">
                <option className="p-4">Open this select menu</option>
                <option value="1" className="p-4">
                  One
                </option>
                <option value="2" className="p-4">
                  Two
                </option>
                <option value="3" className="p-4">
                  Three
                </option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex  align-items-center mx-md-4 position-relative item-control-video"
              controlId="formBasicEmail"
            >
              <FontAwesomeIcon icon={faSearch} className="icon-searchs" />
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="p-4 ps-5"
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SearchVideo;
