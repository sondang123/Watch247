import { faArrowRightLong, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import "./LatestrNews.scss";
import { Link } from "react-router-dom";

const LatestrNews = ({ resultItem }) => {
  return (
    <div className="latestrnews-container border-bottom pb-5">
      {/* <h2 className="latestrnews-title">Mới Nhất</h2> */}
      <Row className="gx-5 gy-3">
        {resultItem &&
          resultItem.map((item) => (
            <Col md={6} key={item.articleId}>
              <Link to={`/news/detailnewpage/${item.articleId}`}>
                <Card>
                  <Card.Img
                    className="news-card-img"
                    variant="top"
                    src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                    alt="thumbnail"
                  />
                  <Card.Body>
                    <div className="news-content-right">
                      <div className="header-news-content-text">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="user-by-news">By {item.author}</span>
                        <span className="d-flex align-items-center time-news">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="icon-clock-news"
                          />
                          <p>
                            {item.updatedAt.slice(8, 10) +
                              "/" +
                              item.updatedAt.slice(6, 7) +
                              "/" +
                              item.updatedAt.slice(0, 4)}
                          </p>
                        </span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
      </Row>
      {/* <Button className="btn-more-news">
        Xem Tất Cả
        <FontAwesomeIcon
          icon={faArrowRightLong}
          className="icon-arrow-right-news"
        />
      </Button> */}
    </div>
  );
};

export default LatestrNews;
