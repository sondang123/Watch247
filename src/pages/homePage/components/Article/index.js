import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Article.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AricleContent from "./ArticleContent";

import { useEffect, useState } from "react";
import ArticleService from "../../../../Service/ArticleService";
import Fade from "react-reveal/Fade";

const Aricle = () => {
  const [resultArticle, setResultArticle] = useState([]);
  const [resultItem, setResultItem] = useState([]);
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
      setResultItem(result.data.articles.slice(0, 1));
    };
    fetchApi();
  }, []);

  const handleClick = (id) => {
    const newItemLeft = resultArticle.filter((item) => item.articleId === id);
    setResultItem(newItemLeft);
  };

  // const newResultArticle = resultArticle.slice(0, 4);
  return (
    <div className="Aricle">
      <Container>
        <Row className="aricle-container">
          <Col md={7}>
            <Fade left>
              <AricleContent
                resultArticle={resultArticle}
                resultItem={resultItem}
              />
            </Fade>
          </Col>
          <Col md={5}>
            <Fade right>
              <div className="aricle-list-item">
                {resultArticle.map((item, index) => (
                  <div
                    key={index}
                    // to="/home"
                    className="d-flex aricle-content-right align-items-center"
                    onClick={() => handleClick(item.articleId)}
                  >
                    <div className="aricle-item-images">
                      <img
                        src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                        alt="thumbnail"
                      />
                    </div>
                    <div className="item-right-text">
                      <h3>{item.title}</h3>
                      <div className="item-right-text-content">
                        {item.description}
                      </div>
                      <span className="d-flex align-items-center pt-2">
                        <FontAwesomeIcon icon={faClock} />
                        <p className="item-aricle-time">
                          {item.updatedAt.slice(8, 10) +
                            "/" +
                            item.updatedAt.slice(6, 7) +
                            "/" +
                            item.updatedAt.slice(0, 4)}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Aricle;
