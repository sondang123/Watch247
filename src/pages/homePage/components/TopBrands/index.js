import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./TopBrands.scss";
import brands from "../../../../assets/images/brands1.png";
import SliderTopBrands from "./SliderTopBrands";

// import BrandService from "../../../../../Service/BrandService";
import { useEffect, useState } from "react";
import BrandService from "../../../../Service/BrandService";
import ListTopBrand from "./ListTopBrand";

import GetData from "../../../../components/GetData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const TopBrands = () => {
  const { t } = useTranslation();
  const [resultBrand, setResultBrand] = useState([]);
  const [showListBrand, setShowListBrand] = useState(false);
  const token = GetData.GetToken();
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
      setResultBrand(result.data.brands);
    };
    fetchApi();
  }, []);

  const handleShowListBrand = () => {
    setShowListBrand(!showListBrand);
  };
  return (
    <div className="top-brands">
      <Container>
        <div className="top-brands-container">
          <div className="d-flex justify-content-between align-items-center header-top-brands">
            <h3 className="title-top-brands">{t("topBrand")}</h3>
            <Link to="/brand">
              <span className="see-more" onClick={() => handleShowListBrand()}>
                {showListBrand ? t("hideRemove") : t("seeMore")}
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="icon-arrow-right"
                />
              </span>
            </Link>
          </div>
          <div className="content-top-brands">
            <div className="list-item-brands">
              {showListBrand ? (
                <ListTopBrand
                  resultBrand={resultBrand}
                  setResultBrand={setResultBrand}
                />
              ) : (
                <SliderTopBrands
                  resultBrand={resultBrand}
                  setResultBrand={setResultBrand}
                />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopBrands;
