import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import queryString from "query-string";
import { useDispatch } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import SliderProduct from "./components/SliderProduct";
import ViewProduct from "./components/ViewProduct";
import WatchService from "./../../Service/WatchService/index";
import Bracdcrumb from "./../../components/Breadcrumb/index";

import { useParams } from "react-router-dom";
import BrandService from "./../../Service/BrandService/index";

const ListProductPage = () => {
  let { brandId } = useParams();
  const dispatch = useDispatch();
  // const [dataViewWatch, setDataViewWatch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataApiLike, setDataApiLike] = useState();
  const [dataViewLike, setDataViewLike] = useState();

  const [queryFilter, setQueryFilter] = useState({
    page: 0,
    limit: 4,
    brandId: brandId,

    modelId: null,
    referenceId: null,
    q: "",
  });

  const [dataFilterWatch, setDataFilterWatch] = useState();
  const [rusultBrand, setReultBrand] = useState([]);
  const [nameBrand, setNameBrand] = useState();
  const [totalPage, setTotalPage] = useState();

  // window.scrollTo(0, 0);

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

        setDataFilterWatch(result.data);
        setTotalPage(result.data.total);
        setLoading(false);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  }, [queryFilter]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await BrandService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      const NameBrand = await result.data.brands.filter(
        (item) => item.brandId === Number(brandId)
      );
      setNameBrand(...NameBrand);

      setReultBrand(result.data.brands);
    };
    fetchApi();
  }, []);

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
      <div style={{ backgroundColor: "#f5f5f5", paddingTop: 150 }}>
        <Container>
          <Bracdcrumb nameBrand={nameBrand} />

          <ViewProduct
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
            dataFilterWatch={dataFilterWatch}
            setDataFilterWatch={setDataFilterWatch}
            dataViewLike={dataViewLike}
            setDataApiLike={setDataApiLike}
            loading={loading}
            totalPage={totalPage}
          />

          <div style={{ paddingTop: 80 }}>
            <h2 className="slider-product-title">Gợi ý cho bạn</h2>
            <SliderProduct
              dataViewLike={dataViewLike}
              dataApiLike={dataApiLike}
              setDataApiLike={setDataApiLike}
            />
          </div>
        </Container>
        <Footer />
      </div>
    </div>
  );
};

export default ListProductPage;
