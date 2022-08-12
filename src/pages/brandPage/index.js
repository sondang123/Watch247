import React, { useEffect, useState } from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Container from "react-bootstrap/esm/Container";
import TopBrands from "./../homePage/components/TopBrands/index";
import "./brandPage.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import BrandService from "./../../Service/BrandService/index";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const BrandPage = () => {
  const { t } = useTranslation();
  const [rusultBrand, setReultBrand] = useState();
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await BrandService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });

      setReultBrand(result.data.brands);
    };
    fetchApi();
  }, []);
  return (
    <div>
      <Header />
      <div className="brandpage-container">
        <Container>
          <TopBrands />
          <div className="d-flex justify-content-between align-items-center header-top-brands">
            <h3 className="title-top-brands">{t("allBrand")}</h3>
            <Link to="/products">
              <span className="see-more">
                {t("seeMore")}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="icon-arrow-right"
                />
              </span>
            </Link>
          </div>

          <div className="list-all-brand">
            <Row>
              <Col lg={1}>
                <h1>A</h1>
              </Col>
              <Col lg={11}>
                <Row>
                  {rusultBrand &&
                    rusultBrand.map((item) => (
                      <Col lg={3} md={4} xs={6} key={item.brandId}>
                        <ul>
                          <Link to={`/listproduct/${item.brandId}`}>
                            <li>{item.name}</li>
                          </Link>
                        </ul>
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default BrandPage;
