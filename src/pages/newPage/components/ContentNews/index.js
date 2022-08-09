import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import HeaderNews from "../HeaderNews";
import LatestrNews from "../LatestrNews";
import NewsContent from "../NewsContent";
import Outstanding from "../Outstanding";
import Topics from "../Topics";
import "./ContentNews.scss";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ArticleService from "./../../../../Service/ArticleService/index";
import { Link } from "react-router-dom";
import ListNew from "./../ListNew/index";

const ContentNews = () => {
  const [resultArticle, setResultArticle] = useState();
  const [resultItem, setResultItem] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await ArticleService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultArticle(result.data.articles);
      setResultItem(result.data.articles.slice(0, 2));
    };
    fetchApi();
  }, []);

  return (
    <div className="content-news-pages">
      {/* <div className="news-container">
        <Container>
          <HeaderNews />
        </Container>
      </div> */}
      <Container>
        {/* <NewsContent /> */}
        <LatestrNews resultItem={resultItem} />
        {/* <Outstanding /> */}
        <Row>
          <Col md={8}>
            <ListNew />
          </Col>
          <Col md={4}>
            <div className="hot-new-container list-new-view">
              <div className="pc">
                <img
                  src="https://cdn.tgdd.vn/GameApp/3/220095/Screentshots/shopee-ung-dung-mua-ban-online-gia-re-05-03-2021-3.png"
                  alt=""
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* <Topics /> */}
      </Container>
    </div>
  );
};

export default ContentNews;
