import axios from "axios";

export * from './auth';
export * from './template';

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v${process.env.NEXT_PUBLIC_API_VERSION}`,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  if (apiKey) {
    config.headers["x-api-key"] = apiKey;
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (!localStorage.getItem("token")) return;

      //localStorage.removeItem("token");
      //window.location.href = "/auth/login";
    }

    return Promise.reject(error);
  }
);
