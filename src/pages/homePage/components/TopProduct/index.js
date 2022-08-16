import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import GetData from "../../../../components/GetData";
import MiscService from "../../../../Service/MiscService";

import "../TopBrands/TopBrands.scss";

import SliderSuggestion from "./SliderTopProduct";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// import SliderTopBrands from "../TopBrands/SliderTopBrands";

import Spinner from "react-bootstrap/Spinner";

const TopProduct = () => {
  const { t } = useTranslation();
  const [resultTopProduct, setResultTopProduct] = useState([]);
  const token = GetData.GetToken();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const result = await MiscService.getAll({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setResultTopProduct(result.data.topWatches);
        setLoading(false);
      } catch (error) {}
    };
    fetchApi();
  }, []);

  return (
    <div className="top-brands suggestions ">
      <Container>
        <div className="top-brands-container">
          <div className="d-flex justify-content-between align-items-center header-top-brands">
            <h3 className="title-top-brands">{t("topProduct")}</h3>
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
          <div className="content-top-brands content-suggestion">
            <div className="list-item-brands">
              {loading ? (
                <Spinner animation="border" className="d-flex m-auto" />
              ) : (
                <SliderSuggestion
                  resultTopProduct={resultTopProduct}
                  setResultTopProduct={setResultTopProduct}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopProduct;
