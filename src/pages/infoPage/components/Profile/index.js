import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Profile = () => {
  return (
    <div>
      <div>
        <Form>
          <div className="d-flex">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_y3iOypYUndeOBWucrfbyCsbz-Fm0Dyy1A-buox5kDtQ8Uwy3CQexXF0RxuWOMQBRX8&usqp=CAU"
                alt="avatar"
              />
            </div>
            <h2>Xin chào, Bo Béo!</h2>
          </div>
          <Row>
            <Col>Thông tin đăng nhập</Col>
          </Row>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col>
                <Form.Label>Email address</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Row>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col>
                <Form.Label>Password</Form.Label>
              </Col>
              <Col>
                <div className="d-flex">
                  <Form.Control type="password" placeholder="Password" />
                  <div>đổi mật khẩu</div>
                </div>
              </Col>
            </Row>
          </Form.Group>
          <Row>
            <Col>thông tin cá nhân</Col>
          </Row>

          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Form.Label>Họ và tên</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="Enter email" />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3">
            <Row>
              <Col>
                <Form.Label>Giới tính</Form.Label>
              </Col>
              <Col>
                <Form.Select>
                  <option>Disabled select</option>
                </Form.Select>
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Profile;
