import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import "../TopBrands/TopBrands.scss";

import SliderSuggestion from "./SliderSuggestion";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
// import SliderTopBrands from "../TopBrands/SliderTopBrands";

const Suggestions = () => {
  const { t } = useTranslation();
  return (
    <div className="top-brands suggestions ">
      <Container>
        <div className="top-brands-container">
          <div className="d-flex justify-content-between align-items-center header-top-brands">
            <h3 className="title-top-brands">{t("suggestionsforyou")}</h3>
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
              <SliderSuggestion />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Suggestions;
