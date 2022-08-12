import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetData from "../../components/GetData";
import Login from "../../components/Header/Login";
import Register from "../../components/Header/Register";
import DetailProduct from "../../pages/detailPage";
import HomePage from "../../pages/homePage";
import Introduce from "../../pages/introducePage";
import NewPage from "../../pages/newPage";
import ProDuctPages from "../../pages/productPage";
import InfoPage from "./../../pages/infoPage/index";
import BrandPage from "./../../pages/brandPage/index";
import ListProductPage from "./../../pages/listProductPage/index";
import DetailNewPage from "./../../pages/detailNewPage/index";
import VideoPage from "./../../pages/videoPages/index";
import HelpPage from "./../../pages/helpPage/index";

const HomeRouter = () => {
  const auth = GetData.GetAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          JSON.parse(localStorage.getItem("acc")) ? <HomePage /> : <Login />
        }
      />
      {/* <Route path="/" element={<HomePage />} /> */}
      <Route path="/list" element={<NewPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/news" element={<NewPage />} />
      <Route path="/introduce" element={<Introduce />} />
      <Route path="/products" element={<ProDuctPages />} />
      <Route path="/detailproduct/:id" element={<DetailProduct />} />
      <Route path="/infoPage" element={<InfoPage />} />
      <Route path="/brand" element={<BrandPage />} />
      <Route path="/listproduct/:brandId" element={<ListProductPage />} />
      <Route
        path="/news/detailnewpage/:articleId"
        element={<DetailNewPage />}
      />
      <Route path="/video" element={<VideoPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  );
};

export default HomeRouter;
