import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Outstanding.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";

const Outstanding = () => {
  return (
    <div className="Outstanding-container">
      <h2 className="outstanding-title">Nổi bật</h2>
      <Row className="gx-5 gy-3">
        <Col md={4}>
          <Card>
            <Card.Img
              className="Outstanding-card-img"
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvcVGKImQ8kwQqjUrgQ89qmtMpG0Btr3Dpjg&usqp=CAU/100px160"
            />
            <Card.Body>
              <div className="news-content-right">
                <div className="header-news-content-text">
                  <h2>Rolex Datejust 41 Full Steel</h2>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="user-by-news">By Thomas Hendricks</span>
                  <span className="d-flex align-items-center time-news">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="icon-clock-news"
                    />
                    <p>3 phút trước</p>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              className="Outstanding-card-img"
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfwNbzP9xFmaGBaRit5Ildc4gzvT-O5TIcrw&usqp=CAU"
            />
            <Card.Body>
              <div className="news-content-right">
                <div className="header-news-content-text">
                  <h2>Rolex Datejust 41 Full Steel</h2>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="user-by-news">By Thomas Hendricks</span>
                  <span className="d-flex align-items-center time-news">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="icon-clock-news"
                    />
                    <p>3 phút trước</p>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img
              className="Outstanding-card-img"
              variant="top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDke8NuYnR_cP5uOV07zPt3Dhx7Qb8gq8r6w&usqp=CAU"
            />
            <Card.Body>
              <div className="news-content-right">
                <div className="header-news-content-text">
                  <h2>Rolex Datejust 41 Full Steel</h2>
                </div>
                <div className="d-flex justify-content-between">
                  <span className="user-by-news">By Thomas Hendricks</span>
                  <span className="d-flex align-items-center time-news">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="icon-clock-news"
                    />
                    <p>3 phút trước</p>
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Outstanding;
