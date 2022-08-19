import "./message.scss";
import InputChat from "./inputChat/index";
import ContentChat from "./contentChat/index";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ListUserChat from "./listUserChat/index";
import MessageService from "./../../../../Service/MessageService/index";
import { WebSocketDemo } from "./websocket/index";

import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { sha256, sha224 } from "js-sha256";
import { useDispatch, useSelector } from "react-redux";

const Message = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [listMessage, setListMessage] = useState();

  // socket
  const [socketUrl, setSocketUrl] = useState("wss://dnk.mdcsoftware.com.vn/ws");
  const [messageHistory, setMessageHistory] = useState([]);
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null && typeof lastMessage !== "undefined") {
      setMessageHistory((prev) => prev.concat(lastMessage));
      if (
        lastMessage.isTrusted &&
        JSON.parse(lastMessage.data).command !== "login"
      ) {
        // dispatch({
        //   type: "GET_DATA_MESSAGE",
        //   // payload: lastMessage,
        //   payload: lastMessage,
        // });
        setListMessage([...listMessage, JSON.parse(lastMessage.data).message]);
      }
    }
  }, [lastMessage, setMessageHistory]);

  const login = {
    command: "login",
    username: "sondang",
    password: sha256("123456"),
  };
  useEffect(() => {
    sendMessage(JSON.stringify(login));
  }, []);

  const handleSend = useCallback((dataSend) => {
    sendMessage(JSON.stringify(dataSend));
  });

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  // console.log("messageHistory", messageHistory);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        // setLoading(true);
        const result = await MessageService.getMy({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setListMessage(result.data.sessions.messages);

        // setLoading(false);
      } catch (err) {
        // alert(err.message);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Row>
        <Col lg={4}>
          <ListUserChat />
        </Col>
        <Col lg={8}>
          <div className="message-container">
            <div className="header-message d-flex align-items-center">
              <div className="avatar">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM1Ijisn0v4_r2Sp-g-9LiWzc1dwbL_IQaFw&usqp=CAU"
                  alt="avatar"
                />
              </div>
              <div>
                <h2>Hỗ trợ khách hàng </h2>
                <p>Online 1 giờ trước</p>
              </div>
            </div>
            <div className="content-message-list h-100vh">
              <ContentChat listMessage={listMessage} />
            </div>
            <InputChat handleSend={handleSend} />
            {/* <WebSocketDemo /> */}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Message;
