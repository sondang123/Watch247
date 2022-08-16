import React, { useState } from "react";
import LogoContent from "../LogoContent";
// import Form from "react-bootstrap/Form";
import "./Footer.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
// import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

const Footer = () => {
  const listLanguage = [
    {
      id: 1,
      name: "Tiếng Việt",
      img: "https://fileth.hcm.edu.vn//UploadImages/thhoabinhq11/2021_11/quocky-1_291120211558.gif?w=400",
    },
    {
      id: 2,
      name: "EngLish",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/300px-Flag_of_the_United_Kingdom.svg.png",
    },
    {
      id: 3,
      name: "French",
      img: "https://tulieuvankien.dangcongsan.vn/Uploads/2018/7/5/3/france228.jpg",
    },
  ];
  const [language, setLanguage] = useState(
    localStorage.getItem("language")
      ? JSON.parse(localStorage.getItem("language"))
      : listLanguage[0]
  );

  const handleLanguageChange = (item) => {
    if (item.name === "EngLish") {
      i18n.changeLanguage("en");
      localStorage.setItem("language", JSON.stringify(item));
      localStorage.setItem("fallbackLng", "en");
    }
    if (item.name === "Tiếng Việt") {
      i18n.changeLanguage("vi");
      localStorage.setItem("language", JSON.stringify(item));
      localStorage.setItem("fallbackLng", "vi");
    }

    setLanguage(item);
  };
  const { t } = useTranslation();

  return (
    <footer className="page-footer font-small blue  footer-container">
      <div className="container-fluid text-center text-md-left footer-content">
        <div className="row">
          <div className="col-lg-4 mb-md-0 mb-3 ">
            <LogoContent />
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-lg-2 col-sm-4 mb-3 pt-3 ">
            <h5 className="text-uppercase">{t("overview")}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">{t("aboutdkprivateclub")}</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2  col-sm-4 mb-3 pt-3">
            <h5 className="text-uppercase">{t("cooperate")}</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">{t("privacyPolicy")}</a>
              </li>
              <li>
                <a href="#!">{t("termsAndService")}</a>
              </li>
              <li>
                <Link to="/help">{t("help")}</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-2  col-sm-4 mb-md-0 mb-3 pt-3">
            <h5 className="text-uppercase">{t("Language.text")}</h5>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="select-language"
              >
                {language && <img src={language.img} alt="cờ" />}
                {language && language.name}
              </Dropdown.Toggle>

              <Dropdown.Menu className="dropdown-language">
                {listLanguage &&
                  listLanguage.map((item) => (
                    <Dropdown.Item
                      key={item.id}
                      onClick={() => handleLanguageChange(item)}
                    >
                      <img src={item.img} alt="cờ" />
                      {item.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
