import React, { useEffect, useState, useRef } from "react";
import Header from "./../../components/Header/index";
import Footer from "./../../components/Footer/index";
import Container from "react-bootstrap/esm/Container";

import ListVideo from "./component/ListVideo/index";
import SearchVideo from "./component/SearchVideo/index";
import VideoService from "./../../Service/VideoService/index";
import Bracdcrumb from "./component/Breadcrumb/index";

const VideoPage = () => {
  const [dataVideo, setDataVideo] = useState();
  const [dataVideoRender, setDataVideoRender] = useState();
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await VideoService.getAll({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        setDataVideo(result.data.videos);
        setDataVideoRender(result.data.videos);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ paddingTop: 120 }}>
        <Container>
          <Bracdcrumb />
          <SearchVideo
            setDataVideoRender={setDataVideoRender}
            dataVideo={dataVideo}
          />
          <ListVideo dataVideo={dataVideoRender} />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPage;
