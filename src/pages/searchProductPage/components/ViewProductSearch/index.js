import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "react-bootstrap/Form";
import {
  faBars,
  faEllipsisVertical,
  faGripVertical,
  faSearch,
  faSliders,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "./viewproductSeach.scss";
import ProductViewRow from "./ProductViewRow";

import InputGroup from "react-bootstrap/InputGroup";

import ProductViewColumn from "./ProductViewClumn";
import PaginationPage from "./PaginationPage";
import WatchService from "./../../../../Service/WatchService/index";
import FilterProduct from "./Filter/index";
import Spinner from "react-bootstrap/Spinner";

const ViewProductSearch = ({
  setQueryFilter,
  queryFilter,

  nameSearch,
}) => {
  const [layoutProduct, setLayOutProduct] = useState(true);
  const [dataApiLike, setDataApiLike] = useState();
  const [dataViewLike, setDataViewLike] = useState();
  const [dataSearchWatch, setDataSearchWatch] = useState();
  const [showFilters, setShowFilters] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleLayoutRow = () => {
    setLayOutProduct(true);
  };
  const handleLayoutColumn = () => {
    setLayOutProduct(false);
  };

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const result = await WatchService.searchWatch(queryFilter, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });

        setDataSearchWatch(result.data);
        setLoading(false);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  }, [queryFilter]);

  const acc = JSON.parse(localStorage.getItem("acc"));
  // get favoris
  useEffect(() => {
    const fetchApi = async () => {
      const result = await WatchService.getFavorite(acc.accountId, {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });

      setDataViewLike(result.data.favourites);
    };
    fetchApi();
  }, [dataApiLike]);

  return (
    <div className="search-product-container">
      <h2 className="title-search-product">
        Chúng tôi đã tìm thấy {dataSearchWatch && dataSearchWatch.total} kết quả
        cho từ khóa “{queryFilter && queryFilter.q}”
      </h2>
      <p>
        Nếu bạn không hài lòng về kết quả tìm kiếm, hãy nhập từ khóa tìm kiếm
        khác
      </p>
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
      </div>
      <InputGroup className="mb-3 group-seach-filter position-relative">
        <FontAwesomeIcon icon={faSearch} className="icon-search" />
        <Form.Control
          placeholder="Nhập từ Khóa Tìm Kiếm"
          aria-label="search"
          aria-describedby="basic-addon1"
          className="search-input"
          value={queryFilter.q}
          onChange={(e) =>
            setQueryFilter({ ...queryFilter, q: e.target.value })
          }
        />
        <FontAwesomeIcon
          icon={faSliders}
          className="icon-sliders"
          onClick={() => setShowFilters(!showFilters)}
        />
        {showFilters && (
          <FilterProduct
            setShowFilters={setShowFilters}
            showFilters={showFilters}
            setDataSearchWatch={setDataSearchWatch}
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
          />
        )}
      </InputGroup>
      <div>
        {loading ? (
          <Spinner animation="border" className="d-flex m-auto " />
        ) : layoutProduct ? (
          <ProductViewRow
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            //
            dataSearchWatch={dataSearchWatch}
          />
        ) : (
          <ProductViewColumn
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            dataSearchWatch={dataSearchWatch}
          />
        )}
        <PaginationPage
          queryFilter={queryFilter}
          setQueryFilter={setQueryFilter}
          setDataSearchWatch={setDataSearchWatch}
          dataSearchWatch={dataSearchWatch}
        />
      </div>
    </div>
  );
};

export default ViewProductSearch;
