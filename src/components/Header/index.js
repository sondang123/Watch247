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

function Header(banner) {
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
                      Trang chủ
                    </Link>
                    <Link to="/introduce" className="header-item">
                      Giới Thiệu
                    </Link>
                    <Link to="/brand" className="header-item">
                      Thương Hiệu
                    </Link>
                    <Link to="/products" className="header-item">
                      Sản Phẩm
                    </Link>

                    <Link to="/news" className="header-item">
                      Tin tức
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
                            <Dropdown.Item className="header-item">
                              <Link to="/infoPage">Info</Link>
                            </Dropdown.Item>
                            <Dropdown.Item className="header-item">
                              <Link to="/register">Dang ky</Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                              onClick={handleLogout}
                              className="header-item"
                            >
                              <FontAwesomeIcon
                                icon={faRightFromBracket}
                                className="icon-logout"
                              />
                              Log out
                            </Dropdown.Item>
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
