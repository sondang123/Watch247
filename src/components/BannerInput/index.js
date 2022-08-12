import React from "react";
import imageBanner from "../../assets/images/bg-login.png";
import "./BannerInput.scss";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Zoom from "react-reveal/Zoom";

import { useTranslation } from "react-i18next";
import i18n from "i18next";

const BannerInput = () => {
  const { t } = useTranslation();
  return (
    <div className="banner-input position-relative">
      <div className="banner-input-img">
        <img src={imageBanner} alt="bg-banner" />
      </div>
      <div className="banner-content">
        <Zoom left>
          <h1>
            Find your dream watch on the leading marketplace for luxury watches.
          </h1>
        </Zoom>
        <div className="content-input">
          {/* <input type="text" />
                <button>Search</button> */}
          <InputGroup className="mb-3">
            <Form.Control
              placeholder={t("searchProduct")}
              aria-label="Tìm kiếm sản phẩm bạn quan tâm..."
              aria-describedby="basic-addon2"
              className="input-banner"
            />
            <Button className="btn-search-banner" id="button-addon2">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon-search"
              />
              <span>{t("search")}</span>
            </Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default BannerInput;
