import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./DownloadApp.scss";
const DownloadApp = () => {
  return (
    <section className="introduce-download-app">
      <div className="introduce-heading">
        <h2>Tải Ứng Dụng</h2>
        <h3>
          Ứng dụng DK Private Club đã sẵn sàng trên nền tảng iOS, để tải ngay
          bạn vui lòng nhấn vào hình dưới đây hoặc quét QR-Code để chuyển ngay
          tới Appstore.
        </h3>
      </div>
      <button className="download-introduce-btn d-flex align-items-center">
        <FontAwesomeIcon icon={faAppleAlt} className="icon-apple" />
        <div className="">
          <span>Available on the</span>
          <p>App Store</p>
        </div>
      </button>
      <div className="introduce-qr-code">
        <div className="qr-code-content">
          {/* <img src="" alt="" /> */}
          QR - Code
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
