import axiox from "axios";

const API = axiox.create({ baseURL: "http://localhost:5000" });

export const uploadImage = (data) => API.post("/upload/", data);

export const uploadPost = (data) => API.post("/post", data);
