import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./profile.scss";
import { useForm } from "react-hook-form";
import AccountService from "./../../../../Service/AccountService/index";
import { sha256, sha224 } from "js-sha256";

const Profile = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const authLogin = JSON.parse(localStorage.getItem("acc"));

  const onSubmit = (data) => {
    console.log(data);
    let dataSubmit = {
      username: data.username,
      email: data.email,
      password: sha256(data.password),
      phone: data.phone,
      dob: data.dob,
    };
    const AccID = authLogin.accountId;
    const fetchApi = async () => {
      const result = await AccountService.upDate(AccID, dataSubmit, {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      console.log(result);
      // setResultTopProduct(result.data.topWatches);
    };
    fetchApi();
  };
  return (
    <div className="profile-container">
      <div className="profile-container-content">
        <h2 className="profile-title"> Thông Tin Tài Khoản</h2>

        <Form className="ps-5" onSubmit={handleSubmit(onSubmit)}>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              UserName
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập tên Của Bạn !"
                // value={authLogin.username}
                {...register("username")}
              />
            </Col>
          </Row>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              Email
            </Col>

            <Col lg={9}>
              <Form.Control
                type="email"
                placeholder="Nhập Email của Bạn !"
                value={authLogin.email}
                {...register("email")}
              />
            </Col>
          </Row>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              Đổi Mật Khẩu
            </Col>

            <Col lg={9}>
              <Form.Control
                type="password"
                placeholder="Nhập password của Bạn !"
                {...register("password")}
              />
            </Col>
          </Row>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              Họ và tên
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập tên Của Bạn !"
                value={authLogin.fullname}
                {...register("fullname")}
              />
            </Col>
          </Row>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              Ngày sinh
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="DD/MM/YYYY  "
                value={authLogin.dob}
                {...register("dob")}
              />
            </Col>
          </Row>
          <Row className="form-row">
            <Col lg={3} className="profile-label">
              Số điện thoại
            </Col>
            <Col lg={9}>
              <Form.Control
                type="text"
                placeholder="Nhập Số Điện Thoại !"
                value={authLogin.phone}
                {...register("phone")}
              />
            </Col>
          </Row>
          <Button className="btn-add-watch btn  btn-save" type="submit">
            Lưu Thay Đổi
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
