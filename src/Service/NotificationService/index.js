import request from "../../utils/request";

const NotificationService = {
  getAll: (headers) => {
    const url = `/notification`;
    return request.get(url, headers);
  },
  getOne: (id, headers) => {
    const url = `/notification/${id}`;
    return request.get(url, headers);
  },
  search: (params, headers) => {
    const url = `/notification/?page=${params.page}&limit=${params.limit}`;
    return request.get(url, headers);
  },

  create: (data, headers) => {
    const url = "/notification/create";
    return request.post(url, data, headers);
  },
  put: (id, params) => {
    const url = `/notification/${id}`;
    return request.put(url, params);
  },
  delete: (id, headers) => {
    const url = `/notification/delete/${id}`;
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

export default NotificationService;
