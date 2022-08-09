import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContentNews from "./components/ContentNews";

const NewPage = () => {
  return (
    <div>
      <Header banner={false} />
      <ContentNews />
      <Footer />
    </div>
  );
};

export default NewPage;
