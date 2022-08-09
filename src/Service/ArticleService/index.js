import request from "../../utils/request";

const ArticleService = {
  getAll: (headers) => {
    const url = `/article`;
    return request.get(url, headers);
  },
  getOne: (id, headers) => {
    const url = `/article/${id}`;
    return request.get(url, headers);
  },
  post: (params) => {
    const url = "/article";
    return request.post(url, params);
  },
  put: (id, params) => {
    const url = `/article/${id}`;
    return request.put(url, params);
  },
  delete: (id) => {
    const url = `/article/${id}`;
    return request.delete(url);
  },
  search: (params, headers) => {
    const url = `/article/?page=${params.page}&limit=${params.limit}`;
    return request.get(url, headers);
  },
};

export default ArticleService;
