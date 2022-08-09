import request from "../../utils/request";

const ReferenceService = {
  getAll: (headers) => {
    const url = `/reference/`;
    return request.get(url, headers);
  },
  getOne: (id, headers) => {
    const url = `/reference/${id}`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/reference";
    return request.post(url, params);
  },
  put: (id, params) => {
    const url = `/reference/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/reference/${id}`;
    return request.delete(url);
  },
  search: (q, headers) => {
    const url = `/reference/?q=${q}`;
    return request.get(url, headers);
  },
  // search: (paramq, headers) => {
  //   const url = `/watch/?page=${params.page}&limit=${params.limit}`;
  //   return request.get(url, headers);
  // },
};

export default ReferenceService;
