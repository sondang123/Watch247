import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import "./ProductFilter.scss";

import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import iconFilter from "../../../../assets/icon/icon-filter.png";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import BrandService from "../../../../Service/BrandService";
import Bracdcrumb from "./../Breadcrumb/index";

const ProductFilter = () => {
  const [resultFilter, setResultFilter] = useState([]);
  const [resultBrand, setResultBrand] = useState([]);

  const handleDeleteSelect = (id) => {
    const newArr = resultFilter.filter((item) => item.id !== id);
    setResultFilter(newArr);
  };

  useEffect(() => {
    const fetchApi = async () => {
      const result = await BrandService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultBrand(result.data.brands);
    };
    fetchApi();
  }, []);
  return (
    <div className="product-filter-container">
      <Bracdcrumb />

      <div>
        <Row>
          <Col sm={10}>
            <Row className="product-filter-select-controls">
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Thương Hiệu
                  </option>
                  <option value="one">One</option>
                  <option value="Two">Two</option>
                  <option value="Three">Three</option>
                </Form.Select>
              </Col>
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Model
                  </option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Khoảng Giá
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Case Size
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Năm
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              <Col md={2} sm={4} className="mb-2">
                <Form.Select
                  aria-label="Default select example"
                  className="select-filter-product"
                  onChange={(e) =>
                    setResultFilter([
                      ...resultFilter,
                      { id: uuid(), name: e.target.value },
                    ])
                  }
                >
                  <option disabled selected value="DEFAULT">
                    Địa Điểm
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
          <Col sm={2}>
            <Dropdown>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="submit-filter"
                onClick={() => alert("hihi")}
              >
                FILTER
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
        </Row>
      </div>
      <div className="d-flex view-item-select">
        {resultFilter.map((item, index) => (
          <div key={index} className="d-flex align-items-center item-slect">
            <p>{item.name}</p>
            <FontAwesomeIcon
              icon={faClose}
              className="icon-close"
              onClick={() => handleDeleteSelect(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;
