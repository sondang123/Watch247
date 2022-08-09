import request from "../../utils/request";

const AppointmentService = {
  getAll: (headers) => {
    const url = `/appointment`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/appointment";
    return request.post(url, params);
  },
  getOne: (id, headers) => {
    const url = `/appointment/${id}`;
    return request.get(url, headers);
  },
  put: (id, params) => {
    const url = `/appointment/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/appointment/${id}`;
    return request.delete(url);
  },
  create: (data, headers) => {
    const url = "/appointment/create";
    return request.post(url, data, headers);
  },
  search: (q) => {
    const url = `/appointment`;
    return request.get(url, {
      params: {
        q,
      },
    });
  },
};

export default AppointmentService;
