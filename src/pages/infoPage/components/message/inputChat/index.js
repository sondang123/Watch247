import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Picker from "emoji-picker-react";
import {
  faImage,
  faFaceSmile,
  faPaperPlane,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./inputchat.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import MiscService from "./../../../../../Service/MiscService/index";

const InputChat = ({ handleSend }) => {
  const [showPicker, setShowPicker] = useState(false);
  const [chooseImgPrev, setChooseImgPrev] = useState([]);
  const [selectImg, setSelectImg] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const inputRef = useRef();

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleChangeImg = (e) => {
    let file = e.target.files;

    const listImg = [];
    const listImgPrev = [];
    for (let i = 0; i < file.length; i++) {
      listImgPrev.push(URL.createObjectURL(file[i]));
      listImg.push(file[i]);
    }

    setSelectImg([...selectImg, ...listImg]);
    setChooseImgPrev([...chooseImgPrev, ...listImgPrev]);
  };
  const handledeleteFile = (index) => {
    const newselect = chooseImgPrev.filter(
      (item) => chooseImgPrev.indexOf(item) !== index
    );
    setChooseImgPrev(newselect);
    const newselect2 = selectImg.filter(
      (item) => selectImg.indexOf(item) !== index
    );

    setSelectImg(newselect2);
  };

  const handleSendClick = () => {
    if (inputStr !== "" && selectImg.length > 0) {
      let dataSend = {
        command: "message",
        type: "TEXT",
        content: inputStr,
      };

      handleSend(dataSend);
      inputRef.current.focus();
      setInputStr("");

      for (var i of selectImg) {
        const formData = new FormData();

        formData.append("image", i);

        const fetchApi = async () => {
          try {
            const result = await MiscService.upload(formData, {
              headers: {
                Authorization:
                  "Bearer" + JSON.parse(localStorage.getItem("token")),
                // Authorization: "Bearer" + `${token}`,
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
              },
            });
            let dataSend2 = {
              command: "message",
              type: "IMAGE",
              content: result.data.url,
            };
            handleSend(dataSend2);
            setSelectImg([]);
            setChooseImgPrev([]);
          } catch (err) {
            alert(err.message);
          }
        };
        fetchApi();
      }
    } else if (inputStr !== "") {
      let dataSend = {
        command: "message",
        type: "TEXT",
        content: inputStr,
      };

      handleSend(dataSend);
      inputRef.current.focus();
      setInputStr("");
    } else if (selectImg.length > 0) {
      for (var i of selectImg) {
        const formData = new FormData();

        formData.append("image", i);

        const fetchApi = async () => {
          try {
            const result = await MiscService.upload(formData, {
              headers: {
                Authorization:
                  "Bearer" + JSON.parse(localStorage.getItem("token")),
                // Authorization: "Bearer" + `${token}`,
                "Content-Type": "multipart/form-data",
                Accept: "application/json",
              },
            });
            let dataSend = {
              command: "message",
              type: "IMAGE",
              content: result.data.url,
            };
            handleSend(dataSend);
            setSelectImg([]);
            setChooseImgPrev([]);
          } catch (err) {
            alert(err.message);
          }
        };
        fetchApi();
      }

      // handleSend(dataSend);
      // setSelectImg([]);
      // setChooseImgPrev([]);
      // // }
    }
  };

  return (
    <div className="input-chat-container">
      <div className="view-img w-100">
        <Row>
          {chooseImgPrev &&
            chooseImgPrev.length > 0 &&
            chooseImgPrev.map((item, index) => (
              <Col md={2} xs={4} key={index}>
                <div className="preview-img position-relative">
                  <img src={item} alt="view-img" />
                  <FontAwesomeIcon
                    icon={faXmark}
                    className="icon-Xmark"
                    onClick={() => handledeleteFile(index)}
                  />
                </div>
              </Col>
            ))}
        </Row>
      </div>
      <div className="d-flex align-items-center position-relative">
        <div className="input-chat-content position-relative">
          <input
            type="text"
            placeholder="Message..."
            value={inputStr}
            onChange={(e) => setInputStr(e.target.value)}
            ref={inputRef}
          />
          <span className="icon-choose">
            <span className="position-relative">
              <FontAwesomeIcon icon={faImage} className="icon-image" />
              <input
                type="file"
                className="choose-file"
                onChange={(e) => {
                  handleChangeImg(e);
                }}
                multiple
              />
            </span>
            <span onClick={() => setShowPicker((val) => !val)}>
              <FontAwesomeIcon icon={faFaceSmile} className="icon-emoj" />
            </span>
          </span>
        </div>
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="icon-send"
          onClick={() => handleSendClick()}
        />
        {showPicker && (
          <Picker pickerStyle={{ width: "100%" }} onEmojiClick={onEmojiClick} />
        )}
      </div>
    </div>
  );
};

export default InputChat;
