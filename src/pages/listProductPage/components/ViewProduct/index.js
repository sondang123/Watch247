import React, { useState, useEffect } from "react";
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
  dataViewLike,
  setDataApiLike,
}) => {
  const [layoutProduct, setLayOutProduct] = useState(true);
  const [dataRender, setDataRender] = useState();
  const handleLayoutRow = () => {
    setLayOutProduct(true);
  };
  const handleLayoutColumn = () => {
    setLayOutProduct(false);
  };

  useEffect(() => {
    const list = [];
    for (let i of dataFilterWatch) {
      list.push({ ...i, like: false });
    }

    setDataRender(list);
  }, [dataFilterWatch]);
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
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            dataRender={dataRender}
            setDataRender={setDataRender}
          />
        ) : (
          <ProductViewColumn
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            dataRender={dataRender}
            setDataRender={setDataRender}
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
