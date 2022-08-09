import request from "../../utils/request";

const VideoService = {
  Login: () => {
    const url = "account/login";
    return request.post(url, {
      username: "quybka",
      password:
        "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    });
  },
  getAll: (headers) => {
    const url = `/video`;
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

export default VideoService;
