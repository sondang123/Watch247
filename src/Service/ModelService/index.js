import request from "../../utils/request";
import Header from "./../../components/Header/index";

const ModelService = {
  getAll: (headers) => {
    const url = `/model`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/model";
    return request.post(url, params);
  },
  put: (id, params) => {
    const url = `/model/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/model/${id}`;
    return request.delete(url);
  },
  search: (idBrand, headers) => {
    const url = `/model?brandId=${idBrand}`;
    return request.get(url, headers);
  },
};

export default ModelService;
