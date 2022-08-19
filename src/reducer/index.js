import loginReducer from "./Auth";
import { combineReducers } from "redux";
import watchReduccer from "./WatchReducer";
import AppointmentReducer from "./AppointmentReducer";
import CartReducer from "./Cart";
import BuyReducer from "./ProductsSold";
import CollectionReducer from "./Collection";
import MyFavouriteReducer from "./myFavourite";
import MessageReducer from "./Message";

const rootReducer = combineReducers({
  login: loginReducer,
  getDataWatch: watchReduccer,
  getDataAppointment: AppointmentReducer,
  getdataCart: CartReducer,
  getdataBuy: BuyReducer,
  getdataCollection: CollectionReducer,
  getdataMyFavourite: MyFavouriteReducer,
  getdataMessage: MessageReducer,
});

export default rootReducer;
