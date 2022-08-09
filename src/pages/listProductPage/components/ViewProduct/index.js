import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import {
  faBars,
  faEllipsisVertical,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import "./ViewProduct.scss";
import ProductViewRow from "./ProductViewRow";
import SliderProduct from "../SliderProduct";
import ProductViewColumn from "./ProductViewClumn";
import PaginationPage from "./PaginationPage";

const ViewProduct = ({
  queryFilter,
  setQueryFilter,
  // setDataViewWatch,
  // dataViewWatch,
  dataFilterWatch,
  setDataFilterWatch,
  dataAllWatch,
}) => {
  const [layoutProduct, setLayOutProduct] = useState(true);
  const handleLayoutRow = () => {
    setLayOutProduct(true);
  };
  const handleLayoutColumn = () => {
    setLayOutProduct(false);
  };

  return (
    <>
      <div className="d-flex justify-content-between view-product-header flex-wrap">
        <div className="d-flex align-items-center view-product-controls ">
          <p>View</p>
          <span className="icon-grid" onClick={handleLayoutRow}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </span>
          <FontAwesomeIcon
            icon={faBars}
            className="icon-bars"
            onClick={handleLayoutColumn}
          />
        </div>
        <div className="d-flex w-lg-25 align-items-center">
          <p className="w-100">Sắp xếp theo:</p>
          <Form.Select
            aria-label="Default select example"
            className="select-filter-view"
          >
            <option>Sự liên quan</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div>
        {layoutProduct ? (
          <ProductViewRow
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
            // setDataViewWatch={setDataViewWatch}
            // dataViewWatch={dataViewWatch}
            dataFilterWatch={dataFilterWatch}
            setDataFilterWatch={setDataFilterWatch}
          />
        ) : (
          <ProductViewColumn
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
            // setDataViewWatch={setDataViewWatch}
            dataFilterWatch={dataFilterWatch}
            setDataFilterWatch={setDataFilterWatch}
          />
        )}
        <PaginationPage
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
          setDataViewWatch={setDataFilterWatch}
          dataViewWatch={dataFilterWatch}
          dataAllWatch={dataAllWatch}
        />
        {/* <SliderProduct /> */}
      </div>
    </>
  );
};

export default ViewProduct;
