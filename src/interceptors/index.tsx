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
      console.log("RequestInterceptor config", config);
      // set the authorization header
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        "token"
      )}`;
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
