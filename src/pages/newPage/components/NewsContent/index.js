import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./NewsContent.scss";

const NewsContent = () => {
  return (
    <div>
      <Row className="header-news-contents offset-news">
        <Col md={7}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkB94rTzljQcAoEZCvzCTZmykYKipOpYR4hw&usqp=CAU"
            alt="watch-left"
            className="header-news-img"
          />
        </Col>
        <Col
          md={5}
          className="d-flex  flex-column  justify-content-center offset-news "
        >
          <div className="news-content-right">
            <div className="header-news-content-text">
              <h2>Rolex Datejust 41 Full Steel</h2>
              <p>
                In 1885, IWC released the first Pallweber pocket watches, which
                featured an innovative approach to telling the time with a
                digital display for hours and minutes... Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur...
              </p>
            </div>
            <div className="d-flex justify-content-between">
              <span className="user-by-news">By Thomas Hendricks</span>
              <span className="d-flex align-items-center time-news">
                <FontAwesomeIcon icon={faClock} className="icon-clock-news" />
                <p>3 phút trước</p>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsContent;
