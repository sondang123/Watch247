import React from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./InformationProduct.scss";

const InformationProduct = ({ resultDetail }) => {
  return (
    <div className="infomation-product-container">
      <div className="infomation-product-table">
        <Row className="gx-5">
          <Col md={6}>
            <h3>Thông tin chi tiết sản phẩm</h3>
            <Table striped bordered hover>
              <tbody>
                <tr className="row">
                  <th className="col-4">Tình trạng</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.listings !== "undefined" &&
                      resultDetail.listings.length > 0 &&
                      resultDetail.listings[0].watchCondition}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Giới tính</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.gender}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Bề dày (thickness):</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.caseSize}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Đường kính mặt:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.dialMaterial}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Màu sắc dây đeo:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail !== "undefined" &&
                      resultDetail.braceletMaterial}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Màu sắc mặt:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.dialMaterial}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Thương hiệu:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.model.brand.name}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Dial:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail !== "undefined" &&
                      resultDetail.dialColor}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Kháng nước:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.waterResistance}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Móc cài (clasp):</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.claspType}
                  </td>
                </tr>
                <tr className="row">
                  <th className="col-4">Chất liệu móc khóa:</th>
                  <td className="col-8">
                    {resultDetail &&
                      typeof resultDetail.reference !== "undefined" &&
                      resultDetail.reference.caseBack}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <div className="more-infomation-detail">
              <h3>
                Đặc điểm nổi bật của Rolex Daytona 2021 “Black Diamond Dial”
              </h3>
              <div className="content-info-right">
                <div>
                  <h3>Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h3>Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div>
                  <h3>Lorem ipsum</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <Button className="btn-infomation-more">Xem thêm</Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default InformationProduct;
