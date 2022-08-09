import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import GetData from "../../../../components/GetData";
import MiscService from "../../../../Service/MiscService";

import "../TopBrands/TopBrands.scss";

import SliderSuggestion from "./SliderTopProduct";
// import SliderTopBrands from "../TopBrands/SliderTopBrands";

const TopProduct = () => {
  const [resultTopProduct, setResultTopProduct] = useState([]);
  const token = GetData.GetToken();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await MiscService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultTopProduct(result.data.topWatches);
    };
    fetchApi();
  }, []);

  return (
    <div className="top-brands suggestions ">
      <Container>
        <div className="top-brands-container">
          <div className="d-flex justify-content-between align-items-center header-top-brands">
            <h3 className="title-top-brands">Top Sản Phẩm</h3>
            <Link to="/products">
              <span className="see-more">
                Xem Thêm
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="icon-arrow-right"
                />
              </span>
            </Link>
          </div>
          <div className="content-top-brands content-suggestion">
            <div className="list-item-brands">
              <SliderSuggestion
                resultTopProduct={resultTopProduct}
                setResultTopProduct={setResultTopProduct}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopProduct;
