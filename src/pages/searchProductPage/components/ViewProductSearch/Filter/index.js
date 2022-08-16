import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import BrandService from "./../../../../../Service/BrandService/index";

import ReferenceService from "./../../../../../Service/ReferenceService/index";
import WatchService from "./../../../../../Service/WatchService/index";
import ModelService from "./../../../../../Service/ModelService/index";

const FilterProduct = ({
  setShowFilters,
  showFilters,

  queryFilter,
  setQueryFilter,
}) => {
  const [listFilter, setListFilter] = useState({
    brand: null,
    model: null,
    ref: null,
  });
  const [changeFilter, setChangeFilter] = useState({
    brandId: null,
    modelId: null,
    referenceId: null,
  });

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await BrandService.getAll({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setListFilter({ ...listFilter, brand: result.data.brands });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  }, []);

  const handleChangeBrand = (e) => {
    setChangeFilter({
      ...changeFilter,
      brandId: e.target.value,
    });
    setQueryFilter({
      ...queryFilter,
      brandId: e.target.value,
    });
    const fetchApi = async () => {
      try {
        const result = await ModelService.search(e.target.value, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setListFilter({ ...listFilter, model: result.data.models });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  };
  const handleChangeModel = (e) => {
    setChangeFilter({ ...changeFilter, modelId: e.target.value });
    setQueryFilter({
      ...queryFilter,
      modelId: e.target.value,
    });
    const fetchApi = async () => {
      try {
        const result = await ReferenceService.searchByModel(e.target.value, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setListFilter({ ...listFilter, ref: result.data.references });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  };
  const handleChangeRef = (e) => {
    setChangeFilter({ ...changeFilter, referenceId: e.target.value });
    setQueryFilter({
      ...queryFilter,
      referenceId: e.target.value,
    });
  };

  // useEffect(() => {
  //   setQueryFilter({
  //     ...queryFilter,
  //     brandId: changeFilter.brandId,
  //     modelId: changeFilter.modelId,
  //     referenceId: changeFilter.referenceId,
  //   });
  // }, [changeFilter]);

  return (
    <div className="show-filter filter-product-page">
      <div className="header-show-filter">
        <FontAwesomeIcon
          icon={faClose}
          className="icon-close"
          onClick={() => setShowFilters(!showFilters)}
        />
      </div>
      <div className="content-filter">
        <h2>Thương Hiệu</h2>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChangeBrand(e)}
        >
          {listFilter &&
            listFilter.brand &&
            listFilter.brand.map((item) => (
              <option value={item.brandId} key={item.brandId}>
                {item.name}
              </option>
            ))}
        </Form.Select>
      </div>
      <div className="content-filter">
        <h2>Mẫu</h2>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChangeModel(e)}
        >
          {listFilter &&
            listFilter.model &&
            listFilter.model.map((item) => (
              <option value={item.modelId} key={item.modelId}>
                {item.name}
              </option>
            ))}
        </Form.Select>
      </div>
      <div className="content-filter">
        <h2>Reference number</h2>
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => handleChangeRef(e)}
        >
          {listFilter &&
            listFilter.ref &&
            listFilter.ref.map((item) => (
              <option value={item.referenceId} key={item.referenceId}>
                {item.name}
              </option>
            ))}
        </Form.Select>
      </div>
    </div>
  );
};

export default FilterProduct;
