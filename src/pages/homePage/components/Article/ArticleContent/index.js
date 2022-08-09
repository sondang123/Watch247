import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const AricleContent = ({ resultArticle, resultItem }) => {
  console.log("resultItem", resultItem);
  return (
    <>
      <div className="" bg="white">
        {resultItem.map((item, index) => (
          <Link
            to={`/news/detailnewpage/${item.articleId}`}
            key={item.articleId}
          >
            <Card className="comtent-new-aricle">
              <Card.Img
                variant="top"
                src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
              />
              <Card.Body>
                <Card.Title className="title-name">{item.title}</Card.Title>
                <Card.Text className="sub-title-text">
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AricleContent;
