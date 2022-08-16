import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import {
  faBars,
  faEllipsisVertical,
  faGripVertical,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import "./ViewProduct.scss";
import ProductViewRow from "./ProductViewRow";
import SliderProduct from "../SliderProduct";
import ProductViewColumn from "./ProductViewClumn";
import PaginationPage from "./PaginationPage";
import FilterProduct from "./../../../searchProductPage/components/ViewProductSearch/Filter/index";
import Spinner from "react-bootstrap/Spinner";

const ViewProduct = ({
  queryFilter,
  setQueryFilter,
  setDataViewWatch,
  dataViewWatch,
  dataViewLike,
  setDataApiLike,
  loading,
}) => {
  const [layoutProduct, setLayOutProduct] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const handleLayoutRow = () => {
    setLayOutProduct(true);
  };
  const handleLayoutColumn = () => {
    setLayOutProduct(false);
  };
  const handleChangeSearch = (e) => {
    setQueryFilter({ ...queryFilter, q: e.target.value });
  };
  const handleChangeSort = (e) => {
    if (e.target.value == 1) {
      const downSort = dataViewWatch.watches.sort(
        (a, b) => a.retailPrice - b.retailPrice
      );
      setDataViewWatch({ watches: downSort });
    } else {
      const downSort = dataViewWatch.watches.sort(
        (a, b) => b.retailPrice - a.retailPrice
      );
      setDataViewWatch({ watches: downSort });
    }
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
        <div className="d-flex flex-wrap search-product">
          <div className="d-flex  align-items-center  search-product-select">
            <p className="w-100">Sắp xếp theo:</p>
            <Form.Select
              aria-label="Default select example"
              className="select-filter-view"
              onChange={(e) => handleChangeSort(e)}
            >
              <option value="1">A-Z</option>
              <option value="2">Z-A</option>
            </Form.Select>
          </div>
          <div className="d-flex  align-items-center search-product-content  position-relative">
            <FontAwesomeIcon icon={faSearch} className="icon-search" />
            <Form.Control
              type="text"
              placeholder="Tìm Kiếm trong brand ..."
              className="form-control-lg search-product-input"
              onChange={(e) => handleChangeSearch(e)}
            />
            <FontAwesomeIcon
              icon={faSliders}
              className="icon-slider"
              onClick={() => setShowFilters(!showFilters)}
            />
            {showFilters && (
              <FilterProduct
                setShowFilters={setShowFilters}
                showFilters={showFilters}
                queryFilter={queryFilter}
                setQueryFilter={setQueryFilter}
              />
            )}
          </div>
        </div>
      </div>
      <div>
        {loading ? (
          <Spinner animation="border" className="d-flex m-auto " />
        ) : layoutProduct ? (
          <ProductViewRow
            setDataApiLike={setDataApiLike}
            dataViewLike={dataViewLike}
            dataViewWatch={dataViewWatch}
          />
        ) : (
          <ProductViewColumn
            dataViewWatch={dataViewWatch}
            setDataApiLike={setDataApiLike}
            dataViewLike={dataViewLike}
          />
        )}
        <PaginationPage
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
          setDataViewWatch={setDataViewWatch}
          dataViewWatch={dataViewWatch}
        />
        {/* <SliderProduct /> */}
      </div>
    </>
  );
};

export default ViewProduct;
