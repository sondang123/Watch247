import request from "../../utils/request";

const MessageService = {
  getAll: (headers) => {
    const url = `/message`;
    return request.get(url, headers);
  },
  getOne: (headers) => {
    const url = `/message`;
    return request.get(url, headers);
  },
  getMy: (headers) => {
    const url = `/message/my`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/message";
    return request.post(url, params);
  },
  put: (id, params) => {
    const url = `/message/${id}`;
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

export default MessageService;
