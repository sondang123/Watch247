import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "./CommentDetailProduct.scss";

const CommentDetailProduct = () => {
  return (
    <div className="comment-detail-product">
      <div className="header-comment">
        <h3>Bình luận (388)</h3>
        <div className="w-100 position-relative border-input-comment">
          <input
            type="text"
            placeholder="Viết bình luận của bạn"
            className="w-100 input-comment"
          />
          <FontAwesomeIcon icon={faPaperPlane} className="icon-send" />
        </div>
      </div>
      <div className="list-commnet-detail">
        <div className="d-flex commnet-detail-item ">
          <div className="user-comment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="position-relative">
            <div className="d-flex align-items-center number-star">
              <FontAwesomeIcon icon={faStar} className="icon-star" />
              <span>4.0</span>
              <p>Chris D</p>
            </div>
            <p className="time-comment">US, June 14, 2022</p>
            <div className="list-commnet">
              <div>
                <h4>Chris D Recommends This Dealer</h4>
                <p>
                  Great! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="rep-comment">
                <h4>Dealer Response</h4>
                <p>
                  Thank you Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo ...
                </p>
                <span>Show more</span>
              </div>
            </div>
            <div className="like-comment">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-like-comment"
              />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="d-flex commnet-detail-item ">
          <div className="user-comment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="position-relative">
            <div className="d-flex align-items-center number-star">
              <FontAwesomeIcon icon={faStar} className="icon-star" />
              <span>4.0</span>
              <p>Chris D</p>
            </div>
            <p className="time-comment">US, June 14, 2022</p>
            <div className="list-commnet">
              <div>
                <h4>Chris D Recommends This Dealer</h4>
                <p>
                  Great! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="rep-comment">
                <h4>Dealer Response</h4>
                <p>
                  Thank you Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo ...
                </p>
                <span>Show more</span>
              </div>
            </div>
            <div className="like-comment">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-like-comment"
              />
              <span>1</span>
            </div>
          </div>
        </div>
        <div className="d-flex commnet-detail-item ">
          <div className="user-comment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_d3SP2vKOeGFVESn5rk6xnPiQ0naW2e-ldA&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="position-relative">
            <div className="d-flex align-items-center number-star">
              <FontAwesomeIcon icon={faStar} className="icon-star" />
              <span>4.0</span>
              <p>Chris D</p>
            </div>
            <p className="time-comment">US, June 14, 2022</p>
            <div className="list-commnet">
              <div>
                <h4>Chris D Recommends This Dealer</h4>
                <p>
                  Great! Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
              </div>
              <div className="rep-comment">
                <h4>Dealer Response</h4>
                <p>
                  Thank you Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo ...
                </p>
                <span>Show more</span>
              </div>
            </div>
            <div className="like-comment">
              <FontAwesomeIcon
                icon={faThumbsUp}
                className="icon-like-comment"
              />
              <span>1</span>
            </div>
          </div>
        </div>
      </div>
      <div className="more-comment">
        <p className="text-center">2 of 338</p>
        <Button className="btn-infomation-more">Xem thêm</Button>
      </div>
    </div>
  );
};

export default CommentDetailProduct;
