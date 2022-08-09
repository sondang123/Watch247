import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "../Login/Login.scss";
import "./Register.scss";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";

function Register() {
  const [showPassWord, setShowPassWord] = useState(false);
  const handleShowPassword = () => {
    setShowPassWord(!showPassWord);
  };
  return (
    <div className="login-wrapper">
      <div className="content-from-login">
        <div className="logo-login-pages">
          <img src="../../../assets/images/LG.png" alt="" />

          <p className="title-logo-login">PRIVATE CLUB</p>
          <span className="sub-login-login">MEMBERS ONLY</span>
        </div>
        <Container>
          <div className="login-container">
            <Form>
              <p className="title-form-login">Đăng Ký</p>
              <Form.Group className="" controlId="formBasicEmail">
                <Form.Label className="title-label-login">
                  Nhập Email:
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email của bạn"
                  className="input-text-login"
                />
                {/* <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text> */}
              </Form.Group>

              <Form.Group className="" controlId="formBasicPassword">
                <Form.Label className="title-label-login">Mật Khẩu:</Form.Label>
                <span className="position-relative">
                  <Form.Control
                    type={!showPassWord && "password"}
                    placeholder="Password"
                    className="input-text-login "
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye-password"
                    onClick={handleShowPassword}
                  />
                </span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="title-label-login">
                  Nhập lại mật khẩu:
                </Form.Label>
                <span className="position-relative">
                  <Form.Control
                    type={!showPassWord && "password"}
                    placeholder="Password"
                    className="input-text-login "
                  />
                  <FontAwesomeIcon
                    icon={faEye}
                    className="eye-password"
                    onClick={handleShowPassword}
                  />
                </span>
              </Form.Group>
              <Form.Group
                className="mb-3 d-flex "
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Tôi đồng ý với các"
                  className="no-account"
                />
                <a href="" className="forgot-password">
                  điều khoản và điều kiện chung
                </a>
                <span className="no-account"></span>
                <a href="" className="forgot-password">
                  Chính sách bảo mật
                </a>
                <span className="no-account">của DK Private Club</span>
              </Form.Group>
              <Button className="w-100 btn-login-submit" type="submit">
                ĐĂNG Ký
              </Button>
              <div className="d-flex">
                <p className="no-account">Bạn đã có tài khoản </p>
                <Link to="/login" className="forgot-password">
                  Đăng nhập ngay
                </Link>
              </div>
            </Form>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Register;
