import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import ProductFilter from "./components/ProductFilter";
// import SliderProduct from "./components/SliderProduct";
import ViewProduct from "./components/ViewProduct";
import WatchService from "./../../Service/WatchService/index";
import SliderProduct from "./../listProductPage/components/SliderProduct/index";
import Spinner from "react-bootstrap/Spinner";

const ProDuctPages = () => {
  const dispatch = useDispatch();

  const [dataApiLike, setDataApiLike] = useState();
  const [dataViewLike, setDataViewLike] = useState();
  const [dataViewWatch, setDataViewWatch] = useState([]);
  const [queryFilter, setQueryFilter] = useState({
    page: 0,
    limit: 4,
    brandId: null,
    modelId: null,
    referenceId: null,
    q: "",
  });
  const [loading, setLoading] = useState(true);
  const [totalPage, setTotalPage] = useState();

  // window.scrollTo(0, 0);
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
        setLoading(true);
        const result = await WatchService.searchWatch(queryFilter, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setDataViewWatch(result.data);
        setTotalPage(result.data.total);

        setLoading(false);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  }, [queryFilter]);

  // get favarit
  const acc = JSON.parse(localStorage.getItem("acc"));
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
            // like
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            loading={loading}
            totalPage={totalPage}
          />
          <div style={{ paddingTop: 80 }}>
            <h2 className="slider-product-title">Gợi ý cho bạn</h2>
            {loading ? (
              <Spinner animation="border" className="d-flex m-auto " />
            ) : (
              <SliderProduct
                dataViewLike={dataViewLike}
                setDataApiLike={setDataApiLike}
                dataApiLike={dataApiLike}
              />
            )}
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default ProDuctPages;
