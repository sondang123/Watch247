/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Container from "react-bootstrap/esm/Container";
import "./helpPage.scss";
import LogoContent from "./../../components/LogoContent/index";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const HelpPage = () => {
  window.scrollTo(0, 0);
  return (
    <div className="help-page-container">
      <Header />
      <div className="help-page-wrapper">
        <div className="banner-help position-relative">
          <div className="content-banner">
            <LogoContent />
          </div>
        </div>
        <Container className="content-help">
          <h2>hệ thống hỗ trợ khách hàng</h2>
          <Row>
            <Col md={6}>
              <div>
                <h3>Trụ sở chính</h3>
                <p>Tầng 14, Tòa nhà kim khí Thăng Long</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.5520901867264!2d105.78563643039243!3d21.030724094697202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c86de556f%3A0x45ca0bf44d212b8e!2sViet%20A!5e0!3m2!1sen!2s!4v1660193983146!5m2!1sen!2s"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="iframe-maps"
                ></iframe>
              </div>
            </Col>
            <Col md={6}>
              <div>
                <h3>Hỗ trợ</h3>
                <p>
                  Nếu bạn có bất kỳ thắc mắc hay ý kiến đóng góp nào vui lòng
                  liên lạc với hệ thống của D&K. Chúng tôi luôn sẵn sàng giải
                  đáp mọi thắc mắc để mang tới bạn những trải nghiệm tốt nhất.
                </p>
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faLocationDot} className="icon-help" />
                  <p>Tầng 14, Tòa nhà kim khí Thăng Long</p>
                </span>
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faPhone} className="icon-help" />
                  <p>0123.456.789</p>
                </span>
                <span className="d-flex align-items-center">
                  <FontAwesomeIcon icon={faEnvelope} className="icon-help" />
                  <p>info@dnk.vn</p>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HelpPage;
