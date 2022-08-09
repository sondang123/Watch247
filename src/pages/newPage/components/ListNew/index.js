import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/esm/Button";
import ArticleService from "./../../../../Service/ArticleService/index";

const ListNew = () => {
  const [filterArticle, setFilterArticle] = useState({
    page: 0,
    limit: 2,
  });
  const [resulFilter, setResulFilter] = useState([]);
  const [resultAll, setResultAll] = useState();
  useEffect(() => {
    const fetchApi = async () => {
      const result = await ArticleService.search(filterArticle, {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });
      setResultAll(result.data);
      setResulFilter(resulFilter.concat(result.data.articles));
    };
    fetchApi();
  }, [filterArticle]);

  const handleMoreNew = () => {
    setFilterArticle({
      // ...filterArticle,
      page: filterArticle.page + 1,
      limit: 2,
    });
  };
  return (
    <div className="new-more-content">
      {/* <h2 className="title-more-content">Bài Viết Liên Quan</h2> */}
      <section className="list-new-view border-end pe-4">
        {resulFilter &&
          resulFilter.length > 0 &&
          resulFilter.map((item) => (
            <Link
              to={`/news/detailnewpage/${item.articleId}`}
              className="list-new-view-item d-block"
              key={item.articleId}
            >
              <Row>
                <Col lg={4}>
                  <div className="list-new-view-item-img">
                    <img
                      src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                      alt="imgnew"
                    />
                  </div>
                </Col>
                <Col lg={8}>
                  <div>
                    <h2>{item.title}</h2>
                    <div className="list-new-view-item-des">
                      {item.description}
                    </div>
                    <div className="d-flex time-user-post">
                      <span>
                        {item.updatedAt.slice(8, 10) +
                          "/" +
                          item.updatedAt.slice(6, 7) +
                          "/" +
                          item.updatedAt.slice(0, 4)}{" "}
                        | by
                      </span>
                      <p>{item.author}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Link>
          ))}
      </section>
      <div>
        {resultAll && resulFilter.length < resultAll.total && (
          <Button className="btn-infomation-more" onClick={handleMoreNew}>
            Xem Thêm
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListNew;
