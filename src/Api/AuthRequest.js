import axiox from "axios";

const API = axiox.create({ baseURL: "http://localhost:5000" });

export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
