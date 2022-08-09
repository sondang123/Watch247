import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const Bracdcrumb = ({ resultDetail }) => {
  console.log("resultArticleOne", resultDetail);
  return (
    <Breadcrumb className="product-breadcrumb">
      <Breadcrumb.Item className="product-breadcrumb-item">
        <Link to="/"> Trang chủ</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item className="product-breadcrumb-item">
        <Link to="/brand">Thương Hiệu</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item className="product-breadcrumb-item">
        <Link to="/news">
          {resultDetail &&
            Object.keys(resultDetail).length > 0 &&
            resultDetail.reference.model.brand.name}
        </Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item active className="product-breadcrumb-item">
        chi tiết sản phẩm
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bracdcrumb;
