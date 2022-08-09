import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ProductFilter from "./components/ProductFilter";
import SliderProduct from "./components/SliderProduct";
import ViewProduct from "./components/ViewProduct";
import WatchService from "./../../Service/WatchService/index";

const ProDuctPages = () => {
  const dispatch = useDispatch();
  const [dataViewWatch, setDataViewWatch] = useState([]);
  const [queryFilter, setQueryFilter] = useState({
    page: 0,
    limit: 4,
  });

  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.getAll({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });

        dispatch({
          type: "GET_DATA_WATCH",
          payload: result.data,
        });
        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.search(queryFilter, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setDataViewWatch(result.data);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  }, [queryFilter]);

  return (
    <div>
      <Header banner={false} />
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Container>
          <ProductFilter />
          <ViewProduct
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
            setDataViewWatch={setDataViewWatch}
            dataViewWatch={dataViewWatch}
          />
          <div style={{ paddingTop: 80 }}>
            <h2 className="slider-product-title">Gợi ý cho bạn</h2>
            <SliderProduct />
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default ProDuctPages;
