import React, { useState, useCallback, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { sha256, sha224 } from "js-sha256";

export function WebSocketDemo() {
  const [socketUrl, setSocketUrl] = useState("wss://dnk.mdcsoftware.com.vn/ws");
  const [messageHistory, setMessageHistory] = useState([]);

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory((prev) => prev.concat(lastMessage));
    }
  }, [lastMessage, setMessageHistory]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl("wss://dnk.mdcsoftware.com.vn/ws"),
    []
  );

  const acc = JSON.parse(localStorage.getItem("acc"));
  const message2 = {
    type: "message",
    text: "hello",
    id: acc.accountId,
  };
  const login = {
    command: "login",
    username: "sondang",
    password: sha256("123456"),
  };
  const sendmes = {
    command: "message",
    type: "TEXT",
    content: "HELLO admin",
  };

  const handleClickSendMessage = useCallback(() =>
    sendMessage(JSON.stringify(login))
  );
  const handleSend = useCallback(() => sendMessage(JSON.stringify(sendmes)));

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  console.log("messageHistory", messageHistory);

  return (
    <div>
      <button onClick={handleClickChangeSocketUrl}>
        Click Me to change Socket Url
      </button>

      <button onClick={handleSend}>gửi Click Me Send</button>
      <button
        onClick={handleClickSendMessage}
        disabled={readyState !== ReadyState.OPEN}
      >
        Login
      </button>
      <span>The WebSocket is currently {connectionStatus}</span>
      {lastMessage ? <span>Last message: {lastMessage.data}</span> : null}
      <ul>
        {messageHistory.map((message, idx) => (
          <span key={idx}>{message ? message.data : null}</span>
        ))}
      </ul>
    </div>
  );
}
