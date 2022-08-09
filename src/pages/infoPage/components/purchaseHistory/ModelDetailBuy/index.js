import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AppointmentService from "./../../../../../Service/AppointmentService/index";
import CloseButton from "react-bootstrap/CloseButton";
import GetData from "./../../../../../components/GetData/index";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

const ModelDetailBuy = (props) => {
  const handleClose = () => {
    props.setModalShowDetailBuy(false);
  };
  //   useEffect(() => {
  //     const fetchApi = async () => {
  //       try {
  //         const result = await AppointmentService.getOne(147, {
  //           headers: {
  //             Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
  //             // Authorization: "Bearer" + `${token}`,
  //             "Content-Type": "application/json; charset=utf-8",
  //             Accept: "application/json",
  //           },
  //         });
  //         console.log("adta apoiment", result);

  //         // navigate("/", { replace: true });
  //       } catch (err) {
  //         alert(err.message);
  //       }

  //       // setResultBrand(result.data.brands);
  //     };
  //     fetchApi();
  //   }, []);

  const dataAppointment = GetData.GetDataAppointment();
  console.log("data sdappointment", dataAppointment);
  const dataDetailBuy = props.dataDetailBuy;
  console.log("dataBuyItem", dataDetailBuy);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông Tin Chi Tiết !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dataAppointment && typeof dataAppointment !== "undefined" && (
          <Row>
            <Col>
              <h3>THông Tin Người Bán</h3>
              <div>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <th>Họ Và Tên</th>
                      <td>{dataAppointment.listing.seller.fullname}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{dataAppointment.listing.seller.email}</td>
                    </tr>
                    <tr>
                      <th>Số Điện Thoại</th>
                      <td>{dataAppointment.listing.seller.phone}</td>
                    </tr>
                    <tr>
                      <th>Ngày Tạo</th>
                      <td>{dataAppointment.updatedAt}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col>
              <h3>THông Tin Người Mua</h3>

              <div>
                <Table striped bordered hover size="sm">
                  <tbody>
                    <tr>
                      <th>Họ Và Tên</th>
                      <td>{dataAppointment.buyer.username}</td>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <td>{dataAppointment.buyer.email}</td>
                    </tr>
                    <tr>
                      <th>Số Điện Thoại</th>
                      <td>{dataAppointment.buyer.phone}</td>
                    </tr>
                    <tr>
                      <th>Ngày Mua</th>
                      <td>{dataAppointment.createdAt}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModelDetailBuy;
