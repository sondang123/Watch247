import request from "../../utils/request";
import Header from "./../../components/Header/index";

const BrandService = {
  getAll: (headers) => {
    const url = `/brand`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/apps";
    return request.post(url, params);
  },
  put: (id, params) => {
    const url = `/apps/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/apps/${id}`;
    return request.delete(url);
  },
  search: (q) => {
    const url = `/apps`;
    return request.get(url, {
      params: {
        q,
      },
    });
  },
};

export default BrandService;
