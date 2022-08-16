import React from "react";
import BannerInput from "../../components/BannerInput";
import Header from "../../components/Header";
import Aricle from "./components/Article";
import Modal from "./components/Modal";

import Suggestions from "./components/Suggestions";
import TopBrands from "./components/TopBrands";
import TopProduct from "./components/TopProduct";
import Video from "./components/Video";

import Footer from "../../components/Footer";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const HomePage = () => {
  return (
    <div>
      <Header banner={true} />
      {/* <BannerInput /> */}
      <div style={{ backgroundColor: "#f5f5f5" }}>
        <Fade left>
          <TopProduct />
        </Fade>

        <Fade right delay={1000}>
          <TopBrands />
        </Fade>
        <Bounce left delay={1000}>
          <Suggestions />
        </Bounce>

        <Aricle />
        <Video />
        <Slide left>
          <Modal />
        </Slide>

        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
