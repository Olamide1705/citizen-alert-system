/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import cookie from "./cookie";
import type { QueryClient } from "@tanstack/react-query";

export type LogoutReason = "expired" | "manual" | "unknown";

const http = axios.create({
  baseURL: "",
  withCredentials: false,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config: any) => {
    if (!config.headers) {
      config.headers = {};
    }

    const token = cookie.get("auth-user")?.access_token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error);
  },
);

let queryClient: QueryClient | null = null;
let logoutHandler: ((reason: LogoutReason) => void) | null = null;

export const registerQueryClient = (qc: QueryClient) => {
  queryClient = qc;
};

export function registerLogoutHandler(handler: (reason: LogoutReason) => void) {
  logoutHandler = handler;
  return () => {
    if (logoutHandler === handler) logoutHandler = null;
  };
}

export function triggerLogout(reason: LogoutReason = "unknown") {
  logoutHandler?.(reason);
}

export const httpLogout = (reason: LogoutReason) => {
  if (queryClient) {
    try {
      queryClient.cancelQueries();
      queryClient.removeQueries();
      queryClient.resetQueries();
    } catch (e) {
      console.log(e);
    }
  }

  if (logoutHandler) {
    logoutHandler(reason);
    return;
  }

  if (typeof window !== "undefined") {
    try {
      cookie.delete?.("auth-user");
    } catch {}
    window.location.href = "/login";
  }
};

export default http;
