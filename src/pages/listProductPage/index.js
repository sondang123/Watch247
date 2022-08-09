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
  const [dataViewWatch, setDataViewWatch] = useState([]);
  const [queryFilter, setQueryFilter] = useState({
    page: 0,
    limit: 4,
    brandId: brandId,
  });

  const [dataAllWatch, setDataAllWatch] = useState([]);
  const [dataFilterWatch, setDataFilterWatch] = useState([]);
  const [rusultBrand, setReultBrand] = useState([]);
  const [nameBrand, setNameBrand] = useState();
  // useEffect(() => {
  //   window.location.reload();
  // }, []);
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.searchWatchBrand(
          { brandId: brandId },
          {
            headers: {
              Authorization:
                "Bearer" + JSON.parse(localStorage.getItem("token")),
              // Authorization: "Bearer" + `${token}`,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
            },
          }
        );

        setDataAllWatch(result.data.watches);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
    };
    fetchApi();
  }, []);

  // console.log("datafilter", dataFilterWatch);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.searchWatchBrand(queryFilter, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setDataFilterWatch(result.data.watches);
        // setDataViewWatch(result.data);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }

      // setResultBrand(result.data.brands);
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

  return (
    <div>
      <Header banner={false} />
      <div style={{ backgroundColor: "#f5f5f5", paddingTop: 150 }}>
        <Container>
          <Bracdcrumb nameBrand={nameBrand} />
          <ViewProduct
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
            // setDataViewWatch={setDataViewWatch}
            // dataViewWatch={dataViewWatch}
            dataFilterWatch={dataFilterWatch}
            setDataFilterWatch={setDataFilterWatch}
            dataAllWatch={dataAllWatch}
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

export default ListProductPage;
