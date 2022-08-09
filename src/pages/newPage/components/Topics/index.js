import React from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Topics.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "react-bootstrap/Card";

const Topics = () => {
  return (
    <div className="topics-container">
      <h2 className="topics-title">Nổi bật</h2>
      <div className="topics-grid">
        <div className="topics-item ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1soo1BpS2ukBOH93zQMF2iLgYOls1g_cV8A&usqp=CAU"
            alt="watch-img-topic"
          />
          <p>WATCH MODELS</p>
        </div>
        <div className="topics-item ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1soo1BpS2ukBOH93zQMF2iLgYOls1g_cV8A&usqp=CAU"
            alt="watch-img-topic"
          />
          <p>WATCH MODELS</p>
        </div>
        <div className="topics-item ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1soo1BpS2ukBOH93zQMF2iLgYOls1g_cV8A&usqp=CAU"
            alt="watch-img-topic"
          />
          <p>WATCH MODELS</p>
        </div>
        <div className="topics-item ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5iYvHjEZxbiRV4F1S229SS3J0nfdV_OmctA&usqp=CAU"
            alt="watch-img-topic"
          />
          <p>WATCH MODELS</p>
        </div>
        <div className="topics-item ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0YnzObOQXU-JVkIGJ5U7J17xUp8BsTMr_g&usqp=CAU"
            alt="watch-img-topic"
          />
          <p>WATCH MODELS</p>
        </div>
      </div>
    </div>
  );
};

export default Topics;
