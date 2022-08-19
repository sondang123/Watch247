import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import "./Login.scss";

import { sha256, sha224 } from "js-sha256";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import AccountService from "../../../Service/AccountService";
import { useDispatch, useSelector } from "react-redux";
import GetData from "./../../GetData/index";
import useWebSocket, { ReadyState } from "react-use-websocket";

function Login() {
  const [showPassWord, setShowPassWord] = useState(false);
  const [resultAccount, setResultAccount] = useState([]);
  const [socketUrl, setSocketUrl] = useState("wss://dnk.mdcsoftware.com.vn/ws");
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  let navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassWord(!showPassWord);
  };

  // const logIn = useSelector((state) => state.login);
  const dispatch = useDispatch();

  // const token = logIn.map((item) => item.accessToken);
  // console.log(token);
  const token = GetData.GetToken();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const dataSubmit = {
      username: data.username,
      password: sha256(data.password),
    };
    const dataConect = {
      command: "login",
      username: data.username,
      password: sha256(data.password),
    };
    // console.log(dataSubmit);
    const fetchApi = async () => {
      try {
        const result = await AccountService.Login(dataSubmit);

        dispatch({
          type: "LOG_IN",
          payload: result.data.account,
        });

        const acc = JSON.stringify(result.data.account);
        localStorage.setItem("acc", acc);

        const dataToken = JSON.stringify(result.data.account.accessToken);
        localStorage.setItem("token", dataToken);

        navigate("/", { replace: true });
      } catch (err) {
        console.log(err);
      }
      // setResultAccount(result.data);
      // console.log("ket qua ApI ", result.data.account.accessToken);
    };
    fetchApi();
    sendMessage(JSON.stringify(dataConect));
  };
  return (
    <div className="login-wrapper">
      <div className="content-from-login container">
        <div className="logo-login-pages">
          <img src="../../../assets/images/LG.png" alt="" />

          <p className="title-logo-login">PRIVATE CLUB</p>
          <span className="sub-login-login">MEMBERS ONLY</span>
        </div>
        <div className="login-container">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <p className="title-form-login">Đăng nhập</p>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="title-label-login">
                Nhập UserName:
              </Form.Label>
              <Form.Control
                // type="email"
                placeholder="Username "
                className="input-text-login"
                {...register("username")}
              />
              {/* <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="title-label-login">Mật Khẩu:</Form.Label>
              <span className="position-relative">
                <Form.Control
                  type={!showPassWord && "password"}
                  placeholder="Password"
                  className="input-text-login "
                  {...register("password")}
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="eye-password"
                  onClick={handleShowPassword}
                />
              </span>
            </Form.Group>
            <Form.Group
              className="mb-3 d-flex justify-content-between"
              controlId="formBasicCheckbox"
            >
              <Form.Check
                type="checkbox"
                label="Duy trì đăng nhập"
                className="no-account"
              />
              <a href="" className="forgot-password">
                Quên mật khẩu
              </a>
            </Form.Group>
            <Button className="w-100 btn-login-submit" type="submit">
              ĐĂNG NHẬP
            </Button>
            <div className="d-flex">
              <p className="no-account">Bạn chưa có tài khoản </p>
              <Link to="/register" className="forgot-password">
                Tạo tài khoản mới miến phí
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
