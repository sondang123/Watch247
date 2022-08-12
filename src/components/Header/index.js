import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faRightFromBracket,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";
import { useState } from "react";
import BannerInput from "../BannerInput";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Notification from "./Notification/index";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

function Header(banner) {
  const { t } = useTranslation();
  const [showBanner, setShowBanner] = useState(banner.banner);
  const [showNotification, setShowNotification] = useState(false);
  // let navigate = useNavigate();
  const expand = "lg";
  const handleShowBanner = () => {
    setShowBanner(!showBanner);
  };

  const authLogin = JSON.parse(localStorage.getItem("acc"));

  const dispatch = useDispatch();
  let navigate = useNavigate();
  // console.log(auth);

  const handleLogout = () => {
    dispatch({
      type: "LOG_OUT",
      payload: {},
    });
    localStorage.removeItem("token");
    localStorage.removeItem("acc");
    navigate("/");
    // <Navigate href="/" replace={true} />;
  };

  return (
    <>
      <div className="header">
        <Navbar
          key={expand}
          expand={expand}
          className=" position-relative header-wrapper"
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand href="/">
              <div className="position-absolute Logo-header-img">
                <img src="../../assets/images/LG.png" alt="Logo" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="close-header-menu"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvas-menu"
            >
              <div className="offcanvas-menu">
                <Offcanvas.Header closeButton className="close-btn-offcanvas">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    {/* Offcanvas */}
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="body-offcanvas-menu">
                  <Nav className="justify-content-end flex-grow-1 pe-3 content-nav-item  align-items-center ">
                    <Link to="/" className="header-item">
                      {t("home")}
                    </Link>
                    <Link to="/introduce" className="header-item">
                      {t("introduce")}
                    </Link>
                    <Link to="/brand" className="header-item">
                      {t("brand")}
                    </Link>
                    <Link to="/products" className="header-item">
                      {t("product")}
                    </Link>

                    <Link to="/news" className="header-item">
                      {t("news")}
                    </Link>
                    <Link to="/video" className="header-item">
                      Video
                    </Link>

                    <span className="d-flex  flex-user">
                      {!banner.banner && (
                        <FontAwesomeIcon
                          icon={faMagnifyingGlass}
                          className="icon-search header-item "
                          onClick={handleShowBanner}
                        />
                      )}
                      <div className="position-relative">
                        <FontAwesomeIcon
                          icon={faBell}
                          className="icon-notification"
                          onClick={() => setShowNotification(!showNotification)}
                        />
                        {showNotification && <Notification />}
                      </div>
                      <Link to="/infoPage">
                        <img
                          src="../../assets/icon/ic_tabbar_account_normal@2x.png"
                          alt="ic_tabbar_account_normal"
                          style={{ width: 18 }}
                        />
                      </Link>

                      {authLogin ? ( // <Nav.Link href="#">Sơn Đặng</Nav.Link>
                        <Dropdown className="user-member-login">
                          <Dropdown.Toggle
                            // id="dropdown-basic"
                            className="dropdown-user"
                          >
                            {authLogin.username}
                          </Dropdown.Toggle>

                          <Dropdown.Menu className="dropdown-menu-list">
                            <Link
                              to="/infoPage"
                              className="header-item d-block ps-0 pt-3"
                            >
                              Info
                            </Link>
                            {/* <Dropdown.Item className="header-item"></Dropdown.Item> */}
                            <Link
                              to="/register"
                              className="header-item d-block ps-0 pt-3"
                            >
                              Dang ky
                            </Link>
                            {/* <Dropdown.Item className="header-item"></Dropdown.Item> */}
                            <div
                              onClick={handleLogout}
                              className="header-item ps-0 pt-3"
                            >
                              <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className="icon-logout"
                              />
                              Log out
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>
                      ) : (
                        <>
                          <Nav.Link href="/login">Đăng Nhập/</Nav.Link>
                          <Nav.Link href="/register">Đăng kí</Nav.Link>
                        </>
                      )}
                    </span>
                  </Nav>
                </Offcanvas.Body>
              </div>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      {showBanner && <BannerInput />}
    </>
  );
}

export default Header;
