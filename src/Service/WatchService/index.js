import request from "../../utils/request";

const WatchService = {
  getAll: (headers) => {
    const url = `/watch`;
    return request.get(url, headers);
  },
  getOne: (id, headers) => {
    const url = `/watch/${id}`;
    return request.get(url, headers);
  },
  search: (params, headers) => {
    const url = `/watch/?page=${params.page}&limit=${params.limit}`;
    return request.get(url, headers);
  },
  searchWatchBrand: (params, headers) => {
    const url = `/watch/?page=${params.page}&limit=${params.limit}&brandId=${params.brandId}`;
    return request.get(url, headers);
  },

  create: (data, headers) => {
    const url = "/watch/create";
    return request.post(url, data, headers);
  },
  put: (id, params) => {
    const url = `/watch/${id}`;
    return request.put(url, params);
  },
  delete: (id, headers) => {
    const url = `/watch/delete/${id}`;
    return request.post(url, headers);
  },
  // search: (q) => {
  //   const url = `/apps`;
  //   return request.get(url, {
  //     params: {
  //       q,
  //     },
  //   });
  // },
};

export default WatchService;
