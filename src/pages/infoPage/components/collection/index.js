import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/esm/Button";
import "./collection.scss";
import ModalBuy from "./modalBuy/index";
import CollectionViewRow from "./viewCollecttion/collectionViewRow";
import ReferenceService from "../../../../Service/ReferenceService";
// import ListingService from "../../../../Service/ListingService";
import WatchService from "../../../../Service/WatchService";
import GetData from "./../../../../components/GetData/index";

const Collection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [showModalStep, setShowModalStep] = useState(false);
  const [resulReference, setResultReference] = useState([]);

  const [resultListing, setResultListing] = useState([]);
  const [searchReference, setSearchReference] = useState("");

  const [dataNewWatchForm, setDataNewWatchForm] = useState([]);
  const [dataOneRef, setDataOneRef] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await ReferenceService.search(searchReference, {
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });
        // console.log("result-api", result);

        setResultReference(result.data.references);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }
    };
    {
      searchReference !== "" && fetchApi();
    }
    // fetchApi();
  }, [searchReference]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await ReferenceService.getOne(
          dataNewWatchForm.referenceId,
          {
            headers: {
              Authorization:
                "Bearer" + JSON.parse(localStorage.getItem("token")),
              // Authorization: "Bearer" + `${token}`,
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json",
            },
          }
        );

        setDataOneRef(result.data.reference);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }
    };
    if ("referenceId" in dataNewWatchForm) {
      fetchApi();
    }
  }, [dataNewWatchForm.referenceId]);

  console.log("dataform", dataNewWatchForm);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const result = await WatchService.getAll({
          headers: {
            Authorization: "Bearer" + JSON.parse(localStorage.getItem("token")),
            // Authorization: "Bearer" + `${token}`,
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json",
          },
        });

        setResultListing(result.data.listings);

        // navigate("/", { replace: true });
      } catch (err) {
        alert(err.message);
      }
    };
    fetchApi();
  }, []);
  const dataCollection = GetData.GetDataCollection();
  console.log("dataCollection", dataCollection);

  return (
    <>
      {dataCollection && dataCollection.length > 0 ? (
        <CollectionViewRow
          setModalShow={setModalShow}
          showModalStep={showModalStep}
          setShowModalStep={setShowModalStep}
        />
      ) : (
        <div className="collection-wrapper">
          <div className="d-flex align-items-center flex-column justify-content-center collection-container">
            <div>
              <FontAwesomeIcon icon={faGears} className="icon-setting" />
            </div>
            <h2 className="title-no-items">
              start your personal watch collection
            </h2>
            <p className="sub-title-no-items">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button
              className="btn-add-watch"
              onClick={() => setModalShow(true)}
            >
              ADD A WATCH
            </Button>
          </div>
        </div>
      )}
      <ModalBuy
        modalShow={modalShow}
        setModalShow={setModalShow}
        resulReference={resulReference}
        setResultReference={setResultReference}
        dataNewWatchForm={dataNewWatchForm}
        setDataNewWatchForm={setDataNewWatchForm}
        setSearchReference={setSearchReference}
        resultListing={resultListing}
        showModalStep={showModalStep}
        setShowModalStep={setShowModalStep}
        dataOneRef={dataOneRef}
      />
    </>
  );
};

export default Collection;
