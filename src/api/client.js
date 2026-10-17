import axios from "axios";
import { ENV } from "@/constants/env";

export const apiClient = axios.create({
  baseURL: ENV.apiBaseUrl,
  timeout: ENV.apiTimeoutMs,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("auth_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject({
      message: error.response?.data?.message || error.message || "Unexpected error",
      status: error.response?.status ?? null,
    })
);
