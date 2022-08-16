import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Container from "react-bootstrap/Container";
import Breadcrumb from "./Breadcrumb";
import ViewProductSearch from "./components/ViewProductSearch/index";
import "./searchProductPage.scss";

const SearchProductPage = () => {
  let { nameSearch } = useParams();
  const [queryFilter, setQueryFilter] = useState({
    page: 0,
    limit: 4,
    q: nameSearch === "undefined" ? "" : nameSearch,
    brandId: null,
    modelId: null,
    referenceId: null,
  });

  return (
    <div>
      <Header />
      <div className="search-product-page">
        <Container>
          <Breadcrumb queryFilter={queryFilter} />
          <ViewProductSearch
            nameSearch={nameSearch}
            queryFilter={queryFilter}
            setQueryFilter={setQueryFilter}
          />
        </Container>
      </div>

      <Footer />
    </div>
  );
};

export default SearchProductPage;
