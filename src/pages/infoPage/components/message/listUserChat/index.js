import React from "react";
import "./listUserChat.scss";

const ListUserChat = () => {
  return (
    <div className="listuser-chat-container">
      <div className="header-list-user">
        <input type="text" placeholder="Tìm Kiếm ..." />
      </div>
      <div className="list-content-chat d-flex d-md-block ">
        <div className="d-flex item-content-chat align-items-center">
          <div className="user-avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTp3HDYImAMaOuhNt-CSC5maSODIshe3ACw&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="name-user d-none d-md-block">
            <h2>Hỗ trợ khách hàng</h2>
            <p>xin chào...</p>
          </div>
        </div>
        <div className="d-flex item-content-chat align-items-center">
          <div className="user-avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTp3HDYImAMaOuhNt-CSC5maSODIshe3ACw&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="name-user d-none d-md-block">
            <h2>Hỗ trợ khách hàng</h2>
            <p>xin chào...</p>
          </div>
        </div>
        <div className="d-flex item-content-chat align-items-center">
          <div className="user-avatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTp3HDYImAMaOuhNt-CSC5maSODIshe3ACw&usqp=CAU"
              alt="avatar"
            />
          </div>
          <div className="name-user d-none d-md-block">
            <h2>Hỗ trợ khách hàng</h2>
            <p>xin chào...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListUserChat;
