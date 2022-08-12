import React from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBorderAll,
  faCartShopping,
  faEnvelope,
  faHeart,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Collection from "./components/collection";

import "./infoPage.scss";
import PurchaseHistoryRow from "./components/purchaseHistory/viewPurchaseHistoryRow/PurchaseHistoryRow";
import ViewBuyRow from "./components/buy/viewBuy/ViewBuyRow/index";
import Profile from "./components/Profile/index";
import ViewLikeRow from "./components/love/viewLove/ViewLoveRow/index";

const InfoPage = () => {
  window.scrollTo(0, 0);

  return (
    <div>
      <Header />
      <div className="wrapper-info-page">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="gx-1 pb-5">
              <Col lg={3}>
                <Nav variant="pills" className="flex-column list-nav-item">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className="control-nav-item">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="icon-nav-info"
                      />
                      <span> Thông Tin Tài khoản</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className="control-nav-item">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        className="icon-nav-info"
                      />
                      Lịch sử mua hàng
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className="control-nav-item">
                      <FontAwesomeIcon icon={faTag} className="icon-nav-info" />
                      Bán
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth" className="control-nav-item">
                      <FontAwesomeIcon
                        icon={faBorderAll}
                        className="icon-nav-info"
                      />
                      Bộ sưu tập
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth" className="control-nav-item">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="icon-nav-info"
                      />
                      Yêu thich
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="sixth" className="control-nav-item">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="icon-nav-info"
                      />
                      Trung tâm hỗ trợ
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Profile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <PurchaseHistoryRow />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <ViewBuyRow />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <Collection />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <ViewLikeRow />
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <h3>b</h3>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default InfoPage;
