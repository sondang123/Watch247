import React, { useEffect, useRef } from "react";
import "./contentChat.scss";
import GetData from "./../../../../../components/GetData/index";

const ContentChat = ({ listMessage }) => {
  const divRef = useRef(null);
  const acc = JSON.parse(localStorage.getItem("acc"));

  const contentChat = GetData.GetDataMessage();

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [listMessage]);

  return (
    <div className="content-chat-container " id="contentChat-id">
      {listMessage &&
        listMessage.length > 0 &&
        listMessage.map((item) => (
          <div ref={divRef}>
            <div
              className={
                item.accountId === acc.accountId ? "user-chat " : "admin-chat "
              }
            >
              {item.type === "TEXT" ? (
                <div>
                  <h3 className="userName-chat">{item.account.fullname}</h3>
                  <div
                    className={
                      item.accountId === acc.accountId
                        ? "user-chat-text"
                        : "admin-chat-text"
                    }
                  >
                    <p>{item.content}</p>
                  </div>
                </div>
              ) : (
                <div className="chat-image">
                  <h3 className="userName-chat">{item.account.fullname}</h3>

                  <img
                    src={"https://dnk.mdcsoftware.com.vn/" + item.content}
                    alt="img"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ContentChat;
