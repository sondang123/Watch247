import axios from "axios";

// console.log("env", process.env.REACT_APP_BASE_URL);

const request = axios.create({
  baseURL: "https://dnk.mdcsoftware.com.vn/api/v1/",
});

export default request;
