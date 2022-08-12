import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Article/Article.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faClock } from "@fortawesome/free-solid-svg-icons";
import VideoService from "../../../../Service/VideoService";
import "./Video.scss";
import Roll from "react-reveal/Roll";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-router-dom";

const Video = () => {
  const { t } = useTranslation();
  const [resultVideo, setResultVideo] = useState([]);
  const [resultVideoItem, setResulVideotItem] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await VideoService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      // console.log("video", result.data.videos);
      setResultVideo(result.data.videos);
      setResulVideotItem(result.data.videos.slice(0, 1));
    };
    fetchApi();
  }, []);

  const handleClick = (id) => {
    const newItemLeft = resultVideo.filter((item) => item.videoId === id);
    setResulVideotItem(newItemLeft);
  };
  return (
    <div className="Aricle video-container">
      <Container>
        <div className="d-flex justify-content-between  header-top-brands">
          <h3 className="title-top-brands">DK TV</h3>
          <Link to="/video">
            <span className="see-more">
              {t("seeMore")}
              <FontAwesomeIcon
                icon={faAngleRight}
                className="icon-arrow-right"
              />
            </span>
          </Link>
        </div>
        <Row className="aricle-container">
          <Col md={7}>
            {resultVideoItem.map((item, index) => (
              <div className="" bg="white" key={index}>
                <Roll left>
                  <Card className="comtent-new-aricle content-video-aricle">
                    <video
                      controls
                      src={"https://dnk.mdcsoftware.com.vn/" + item.link}
                    ></video>

                    <Card.Body>
                      <Card.Title className="title-name">
                        {item.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Roll>
              </div>
            ))}
          </Col>
          <Col md={5}>
            <Roll right>
              <div className="aricle-list-item video-aricle-list-item">
                {resultVideo.map((item, index) => (
                  <div
                    className="d-flex aricle-content-right "
                    onClick={() => handleClick(item.videoId)}
                    key={index}
                  >
                    <div className="aricle-item-images">
                      <img
                        src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="item-right-text">
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </Roll>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Video;
