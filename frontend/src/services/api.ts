import axios, { InternalAxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_BASE || "https://s17-clone-production-d784.up.railway.app/api/v0", // url que viene del .env o el local
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials:true
});

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  //  agregar logica para incluir el token en la peticion
  let token = null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
