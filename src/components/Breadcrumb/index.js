import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";

const Bracdcrumb = ({ nameBrand, nameProduct }) => {
  return (
    <Breadcrumb className="product-breadcrumb">
      <Breadcrumb.Item className="product-breadcrumb-item">
        <Link to="/"> Trang chủ</Link>
      </Breadcrumb.Item>
      {nameBrand && (
        <Breadcrumb.Item className="product-breadcrumb-item">
          <Link to="/brand">Thương Hiệu</Link>
        </Breadcrumb.Item>
      )}
      {nameProduct && (
        <Breadcrumb.Item className="product-breadcrumb-item">
          <Link to="/brand">Sản Phẩm</Link>
        </Breadcrumb.Item>
      )}
      <Breadcrumb.Item active className="product-breadcrumb-item">
        {nameBrand && nameBrand.name}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default Bracdcrumb;
