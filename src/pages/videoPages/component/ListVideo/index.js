import React from "react";
import "./ListVideo.scss";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import playimg from "../../../../assets/images/play-media.png";
import ModalVideo from "./../ModalVideo/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

const ListVideo = ({ dataVideo }) => {
  const [modalShowVideo, setModalShowVideo] = React.useState(false);
  const [dataDetailVideo, setDataDetailVideo] = React.useState();
  const handleClick = (item) => {
    setModalShowVideo(true);
    setDataDetailVideo(item);
  };
  return (
    <div className="list-video-container">
      <Row className="gy-4">
        {dataVideo &&
          dataVideo.map((item) => (
            <Col lg={4} md={6} key={item.videoId}>
              {/* <Card onClick={() => setModalShowVideo(true)}> */}
              <Card onClick={() => handleClick(item)}>
                <div className="card-video position-relative">
                  {/* <video
                    variant="top"
                    // controls
                    className="thumbnail-video"
                    src={"https://dnk.mdcsoftware.com.vn/" + item.link}
                  /> */}
                  <img
                    className="thumbnail-video"
                    src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                    alt="img"
                  />
                  <div className="play-media">
                    <img src={playimg} alt="play" />
                  </div>

                  <FontAwesomeIcon
                    icon={faShareFromSquare}
                    className="share-media"
                  />
                </div>
                <Card.Body className="body-des-video">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>1 day ago</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}

        <ModalVideo
          show={modalShowVideo}
          onHide={() => setModalShowVideo(false)}
          dataDetailVideo={dataDetailVideo}
        />
      </Row>
    </div>
  );
};

export default ListVideo;
