import React, { useEffect, useState } from "react";
import Popover from "react-bootstrap/Popover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "classnames/bind";
import "./notification.scss";
import NotificationService from "./../../../Service/NotificationService/index";

const Notification = () => {
  const [dataNotification, setDataNotification] = useState();
  const acc = JSON.parse(localStorage.getItem("acc"));
  const [dataFilter, setDataFilter] = useState({
    page: 0,
    limit: 4,
    accountId: acc.accountId,
  });
  useEffect(() => {
    const fetchApi = async () => {
      const result = await NotificationService.search(dataFilter, {
        headers: {
          Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
          // Authorization: "Bearer" + `${token}`,
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json",
        },
      });

      setDataNotification(result.data.notifications);
    };
    fetchApi();
  }, [dataFilter]);

  console.log(dataFilter);
  const handleClick = () => {
    if (dataFilter.limit === null) {
      setDataFilter({ ...dataFilter, limit: 4 });
    } else {
      setDataFilter({ ...dataFilter, limit: null });
    }
  };
  return (
    <div className="position-absolute notification-container">
      <div className="d-flex align-items-center justify-content-between header-notification">
        <h4>Thông Báo</h4>
        <span className="d-flex align-items-center ">
          <FontAwesomeIcon icon={faCheck} className="tick-notification" />
          <p>Đánh dấu là đã đọc</p>
        </span>
      </div>
      <div className="list-notification">
        {dataNotification &&
          dataNotification.map((item) => (
            <div className="d-flex notification-item" key={item.notificationId}>
              <div className="avatar-img">
                <img
                  src={"https://dnk.mdcsoftware.com.vn/" + item.thumbnail}
                  alt="avatar"
                />
              </div>

              <div>
                <p className="pb-1">{item.title}</p>
                <p>{item.summary}</p>
                <span>15 phut</span>
              </div>
            </div>
          ))}
      </div>
      <div className="more-notification" onClick={handleClick}>
        {dataFilter.limit === null ? <p>ẩn bớt</p> : <p>Xem Tất Cả</p>}
      </div>
    </div>
  );
};

export default Notification;
