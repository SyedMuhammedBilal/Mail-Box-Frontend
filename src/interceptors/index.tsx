import React from "react";
import axios from "axios";

interface RequestInterceptorProps {
  children: JSX.Element | JSX.Element[];
}

const RequestInterceptor: React.FC<RequestInterceptorProps> = ({
  children,
}: RequestInterceptorProps) => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
};

export default RequestInterceptor;
