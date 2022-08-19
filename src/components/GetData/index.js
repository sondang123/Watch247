import { useDispatch, useSelector } from "react-redux";

const GetData = {
  GetToken: () => {
    const logIn = useSelector((state) => state.login);
    if (Object.keys(logIn).length > 0) {
      return logIn.user.accessToken;
    }
  },

  GetAuth: () => {
    const logIn = useSelector((state) => state.login);

    return logIn.user;
  },
  GetDataWatch: () => {
    const dataWatch = useSelector((state) => state.getDataWatch);
    // console.log("data", dataWatch);

    return dataWatch[0];
  },
  GetDataAppointment: () => {
    const dataAppointment = useSelector((state) => state.getDataAppointment);

    return dataAppointment[0];
  },
  GetDataCart: () => {
    const dataCart = useSelector((state) => state.getdataCart);

    return dataCart;
  },
  GetDataBuy: () => {
    const dataBuy = useSelector((state) => state.getdataBuy);

    return dataBuy;
  },
  GetDataCollection: () => {
    const dataCollection = useSelector((state) => state.getdataCollection);

    return dataCollection;
  },
  GetDataMyFavorite: () => {
    const dataMyFavorite = useSelector((state) => state.getdataMyFavourite);

    return dataMyFavorite;
  },
  GetDataMessage: () => {
    const dataMessage = useSelector((state) => state.getdataMessage);

    return dataMessage;
  },
};

export default GetData;
