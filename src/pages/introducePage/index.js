import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContentIntroDuce from "./components/ContentIntroduce";

const Introduce = () => {
  return (
    <div>
      <Header banner={true} />

      <ContentIntroDuce />
      <Footer />
    </div>
  );
};

export default Introduce;
