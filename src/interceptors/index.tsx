import React from "react";
import axios from "axios";

interface RequestInterceptorProps {
  children: JSX.Element | JSX.Element[];
}

const RequestInterceptor: React.FC<RequestInterceptorProps> = ({
  children,
}: RequestInterceptorProps) => {
  console.log("RequestInterceptor");

  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      config.withCredentials = true;
      return config;
    },
    (error) => {
      console.log("RequestInterceptor error", error);
      return Promise.reject(error);
    }
  );

  return <>{children}</>;
};

export default RequestInterceptor;
