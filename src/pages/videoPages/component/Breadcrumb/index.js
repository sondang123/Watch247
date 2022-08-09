import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const Bracdcrumb = ({ resultArticleOne }) => {
  console.log("resultArticleOne", resultArticleOne);
  return (
    <Breadcrumb className="product-breadcrumb">
      <Breadcrumb.Item className="product-breadcrumb-item">
        <Link to="/"> Trang chủ</Link>
      </Breadcrumb.Item>

      <Breadcrumb.Item active className="product-breadcrumb-item">
        <Link to="/video">Video</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bracdcrumb;
