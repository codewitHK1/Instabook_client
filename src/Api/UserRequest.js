import axiox from "axios";

const API = axiox.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => API.get(`/user/${userId}`);

export const updateUser = (id, formdata) => API.put(`/user/${id}`, formdata);

export const getAllUser = () => API.get("/user");

export const followUser = (id, data) => API.put(`/user/${id}/follow`, data);

export const unFollowUser = (id, data) => API.put(`/user/${id}/unfollow`, data);
