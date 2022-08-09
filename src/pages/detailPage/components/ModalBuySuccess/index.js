import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Register from "./../../../../components/Header/Register/index";
import AppointmentService from "./../../../../Service/AppointmentService/index";

function ModalBuySuccess(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  // const onSubmit = (data) => {
  //   console.log("dâtrgf", data);
  //   // setDataNewWatchForm({ ...dataNewWatchForm, listings: [watch(data)] });
  // };
  const acc = JSON.parse(localStorage.getItem("acc"));

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(props.resultDetail);
    let dataSubmit = {
      listingId:
        props.resultDetail.listings[props.resultDetail.listings.length - 1]
          .listingId,
      buyerId: acc.accountId,
      soldPrice: 500000,
      ...data,
    };

    const fetchApi = async () => {
      try {
        const result = await AppointmentService.create(dataSubmit, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });

        dispatch({
          type: "GET_DATA_APPOINTMENT",
          payload: result.data.appointment,
        });

        dispatch({
          type: "GET_DATA_CART",
          payload: props.resultDetail,
        });
        props.onHide();
        setTimeout(() => {
          alert("Cảm Ơn Bạn Đã Mua Hàng !");
        }, 1000);
        // dispatch({
        //   type: "GET_DATA_WATCH",
        //   payload: result.data,
        // });
        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Phản Hồi Từ Admin !
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="modal-add-label">
              Nhập Địa Chỉ Giao Dịch
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập  địa chỉ giao dịch"
              className="input-add-modal p-4 mt-3"
              {...register("location")}
              // onChange={(e) => setSearchReference(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-add-watch btn-next" type="submit">
            BUY
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default ModalBuySuccess;
