import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SliderProduct from "../productPage/components/SliderProduct";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import SliderDetaiProduct from "./components/SliderDetailProduct";
import ContentDetailProduct from "./components/ContentDetailProduct";

import CommentDetailProduct from "./components/CommentDetailProduct";
import InformationProduct from "./components/InformationProduct";
import { useParams } from "react-router-dom";
import GetData from "../../components/GetData";
import WatchService from "../../Service/WatchService";
import Bracdcrumb from "./components/Breadcrumb/index";

const DetailProduct = () => {
  let { id } = useParams();

  // const dataAppointment = GetData.GetDataAppointment();
  // const dataWatch = GetData.GetDataWatch();
  // if (dataWatch) {
  //   var resultDetail = dataWatch.watches.filter((data) => data.watchId == id);
  // }
  const [resultDetail, setResultDetail] = useState({});

  window.scrollTo(0, 0);

  // console.log(resultDetail);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.getOne(id, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        window.scrollTo(0, 0);

        setResultDetail(result.data.watch);
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
  }, [id]);

  return (
    <div>
      <Header />
      <Container>
        <div style={{ paddingTop: 120 }}>
          <Bracdcrumb resultDetail={resultDetail} />
        </div>
        <Row className="gx-5 pt-5">
          <Col md={6}>
            <SliderDetaiProduct resultDetail={resultDetail} />
          </Col>
          <Col md={6}>
            <ContentDetailProduct resultDetail={resultDetail} />
          </Col>
        </Row>
        <InformationProduct resultDetail={resultDetail} />
        <CommentDetailProduct />
        <div style={{ paddingTop: 80 }}>
          <h2 className="slider-product-title">Sản phẩm tương tự</h2>
          <SliderProduct />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default DetailProduct;
