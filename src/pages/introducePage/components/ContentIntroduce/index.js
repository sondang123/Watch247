import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ContentIntroDuce.scss";
import IntroduceImg1 from "../../../../assets/images/introduce-img1.png";
import IntroduceImg2 from "../../../../assets/images/introduce-img2.png";
import IntroduceImg3 from "../../../../assets/images/introduce-img3.png";
import IntroduceImg4 from "../../../../assets/images/introduce-img4.png";
import IntroduceImg5 from "../../../../assets/images/introduce-img-right-1.png";
import SliderInTroDuce from "../SliderIntroDuce";
import DownloadApp from "../DownloadApp";

const ContentIntroDuce = () => {
  window.scrollTo(0, 0);
  return (
    <div className="introduce-wrapper">
      <Container>
        <div className="introduce-heading">
          <h2>Giới thiệu về hệ thống dK private club</h2>
          <h3>
            Do you want to buy or sell new or pre-owned luxury watches? Then DK
            Private Club is the right place for you.
          </h3>
        </div>
        <Row className="introduce-steps-wrapper gx-5">
          <Col lg={3} md={6} className="introduce-item">
            <div className="introduce-steps">
              <div className="introduce-steps-item">
                <div>
                  <img src={IntroduceImg1} alt="xacthucimg" />
                </div>
                <p>Đảm bảo tính xác thực</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="introduce-item">
            <div className="introduce-steps">
              <div className="introduce-steps-item">
                <div>
                  <img src={IntroduceImg2} alt="xacthucimg" />
                </div>
                <p>Người bán tin cậy</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="introduce-item">
            <div className="introduce-steps">
              <div className="introduce-steps-item">
                <div>
                  <img src={IntroduceImg3} alt="xacthucimg" />
                </div>
                <p>Bảo vệ người mua</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="introduce-item">
            <div className="introduce-steps">
              <div className="introduce-steps-item">
                <div>
                  <img src={IntroduceImg4} alt="xacthucimg" />
                </div>
                <p>Thanh toán thuận tiện</p>
              </div>
            </div>
          </Col>
        </Row>
        <section className="introduce-news">
          <div className="row introduce-news-row">
            <div className="col-md-6 ofset-introduce-new ">
              <div className="content-introduce-news-text">
                <h3>Đảm bảo tính xác thực</h3>
                <p>
                  Mọi chiếc đồng hồ mới và đã qua sử dụng trên DK Private Club
                  đều là hàng thật. Các đại lý được yêu cầu kiểm tra tính xác
                  thực của từng chiếc đồng hồ. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            </div>
            <div className="col-md-6 ofset-introduce-new">
              <div className="introduce-news-img-right">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="introduceImh-right"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="introduce-news">
          <div className="row introduce-news-row flex-row-reverse">
            <div className="col-md-6 ofset-introduce-new">
              <div className="content-introduce-news-text">
                <h3>Đảm bảo tính xác thực</h3>
                <p>
                  Mọi chiếc đồng hồ mới và đã qua sử dụng trên DK Private Club
                  đều là hàng thật. Các đại lý được yêu cầu kiểm tra tính xác
                  thực của từng chiếc đồng hồ. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            </div>
            <div className="col-md-6 ofset-introduce-new">
              <div className="introduce-news-img-right">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRcKbQDD4pD2uO77SDiI1sTF7tox3FRzthA&usqp=CAU"
                  alt="introduceImh-right"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="introduce-news">
          <div className="row introduce-news-row ">
            <div className="col-md-6 ofset-introduce-new">
              <div className="content-introduce-news-text">
                <h3>Đảm bảo tính xác thực</h3>
                <p>
                  Mọi chiếc đồng hồ mới và đã qua sử dụng trên DK Private Club
                  đều là hàng thật. Các đại lý được yêu cầu kiểm tra tính xác
                  thực của từng chiếc đồng hồ. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                  ea commodo consequat. Duis aute irure dolor in reprehenderit
                  in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur.
                </p>
              </div>
            </div>
            <div className="col-md-6 ofset-introduce-new">
              <div className="introduce-news-img-right">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT432BWkTZzA9oKTO3JIkcIeYDcyEByp4YY9g&usqp=CAU"
                  alt="introduceImh-right"
                />
              </div>
            </div>
          </div>
        </section>
        <SliderInTroDuce />
        <DownloadApp />
      </Container>
    </div>
  );
};

export default ContentIntroDuce;
