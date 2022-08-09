import React, { useEffect, useState } from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./detailNewPage.scss";
import { useParams, Link } from "react-router-dom";
import ArticleService from "./../../Service/ArticleService/index";
import ListNew from "./../newPage/components/ListNew/index";
import parse from "html-react-parser";
import Bracdcrumb from "./Breadcrumb/index";

const DetailNewPage = () => {
  let { articleId } = useParams();
  const [resultArticleOne, setResultArticleOne] = useState();
  const [resultArticle, setResultArticle] = useState();
  const [resultItem, setResultItem] = useState();
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await ArticleService.getOne(Number(articleId), {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });

      setResultArticleOne(result.data.article);
    };
    fetchApi();
  }, [articleId]);

  useEffect(() => {
    const fetchApi = async () => {
      const result = await ArticleService.getAll({
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultArticle(result.data.articles.slice(0, 4));
      setResultItem(result.data.articles.slice(0, 1));
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: 120, paddingBottom: 30 }}>
        <Container>
          <Bracdcrumb resultArticleOne={resultArticleOne} />
          <Row>
            <Col lg={8}>
              {resultArticleOne && Object.keys(resultArticleOne).length > 0 && (
                <div className="content-detail-newpage">
                  <h2 className="title-content-new">
                    {resultArticleOne.title}
                  </h2>
                  <div className="d-flex time-user-post">
                    <span>
                      {resultArticleOne.updatedAt} {""}| By
                    </span>
                    <p>{resultArticleOne.author}</p>
                  </div>
                  <div className="content-new-view">
                    <p>{resultArticleOne.description}</p>
                    <div className="content-new-view-img">
                      <img
                        src={
                          "https://dnk.mdcsoftware.com.vn/" +
                          resultArticleOne.thumbnail
                        }
                        alt="imgNew"
                      />
                    </div>

                    {parse(resultArticleOne.content)}
                  </div>
                  <div>
                    <Button size="lg" className="btn-share">
                      <span>
                        <span>Chia Sẻ</span>
                      </span>
                    </Button>
                  </div>
                </div>
              )}
              <div className="new-more-content">
                <h2 className="title-more-content">Bài Viết Liên Quan</h2>
                <ListNew />
                {/* <div>
                  <Button className="btn-infomation-more">Xem Thêm</Button>
                </div> */}
              </div>
            </Col>
            <Col lg={4}>
              <div className="hot-new-container list-new-view">
                <h2 className="hot-new">
                  tin tức
                  <span>Hot Nhất</span>
                </h2>
                {resultItem &&
                  resultItem.map((item) => (
                    <Link
                      to={`/news/detailnewpage/${item.articleId}`}
                      className="view-right-new list-new-view-item d-block"
                      key={item.articleId}
                    >
                      <div className="list-new-view-item-img pb-3">
                        <img
                          src={
                            "https://dnk.mdcsoftware.com.vn/" + item.thumbnail
                          }
                          alt="imgnew"
                        />
                      </div>

                      <div>
                        <h2>{item.title}</h2>
                        <div className="list-new-view-item-des">
                          {item.description}}
                        </div>
                        <div className="d-flex time-user-post">
                          <span>
                            {item.updatedAt.slice(8, 10) +
                              "/" +
                              item.updatedAt.slice(6, 7) +
                              "/" +
                              item.updatedAt.slice(0, 4)}{" "}
                            {""}| by
                          </span>
                          <p>{item.author}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                <section>
                  {resultArticle &&
                    resultArticle.map((item) => (
                      <Link
                        to={`/news/detailnewpage/${item.articleId}`}
                        className="list-new-view-item d-block"
                        key={item.title}
                      >
                        <Row>
                          <Col xs={4}>
                            <div className="list-new-view-item-img list-img-hot-news">
                              <img
                                src={
                                  "https://dnk.mdcsoftware.com.vn/" +
                                  item.thumbnail
                                }
                                alt="imgnew"
                              />
                            </div>
                          </Col>
                          <Col xs={8}>
                            <div>
                              <h2>{item.title}</h2>

                              <div className="d-flex time-user-post">
                                <span>
                                  {item.updatedAt.slice(8, 10) +
                                    "/" +
                                    item.updatedAt.slice(6, 7) +
                                    "/" +
                                    item.updatedAt.slice(0, 4)}{" "}
                                  {""}| by
                                </span>
                                <p>{item.author}</p>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Link>
                    ))}
                </section>
                <div className="pc">
                  <img
                    src="https://cdn.tgdd.vn/GameApp/3/220095/Screentshots/shopee-ung-dung-mua-ban-online-gia-re-05-03-2021-3.png"
                    alt=""
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default DetailNewPage;
