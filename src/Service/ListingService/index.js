import request from "../../utils/request";

const ListingService = {
  getAll: (headers) => {
    const url = `/listing/`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/listing";
    return request.post(url, params);
  },
  create: (data, headers) => {
    const url = "/listing/create";
    return request.post(url, data, headers);
  },
  put: (id, params) => {
    const url = `/listing/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/listing/${id}`;
    return request.delete(url);
  },
  search: (q, headers) => {
    const url = `/listing/?q=${q}`;
    return request.get(url, headers);
  },
  // search: (paramq, headers) => {
  //   const url = `/watch/?page=${params.page}&limit=${params.limit}`;
  //   return request.get(url, headers);
  // },
};

export default ListingService;
