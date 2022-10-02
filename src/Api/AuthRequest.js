import axiox from "axios";

const API = axiox.create({
  baseURL: "https://instabook-server.herokuapp.com/",
});

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
