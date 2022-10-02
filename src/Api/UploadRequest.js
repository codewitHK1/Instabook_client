import axiox from "axios";

const API = axiox.create({
  baseURL: "https://instabook-server.herokuapp.com/",
});

export const uploadImage = (data) => API.post("/upload/", data);

export const uploadPost = (data) => API.post("/post", data);
