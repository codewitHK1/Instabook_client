import axiox from "axios";

const API = axiox.create({ baseURL: "http://localhost:5000" });

export const getTimelinePosts = (id) => API.get(`/post/${id}/timeline`);
export const likePost = (id, userId) =>
  API.put(`/post/${id}/like`, { userId: userId });
