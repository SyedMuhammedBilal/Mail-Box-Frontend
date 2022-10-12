import { stagingEnvironmentConfig } from "./env/environment.staging";
import { prodEnvironmentConfig } from "./env/environment.prod";

const stage = process.env.NODE_ENV;
console.log("stage", stage);

export const config = stage === "development" ? stagingEnvironmentConfig : prodEnvironmentConfig;

const { serverUrl } = config;

export const API_URL = serverUrl;

console.log("serverUrl", serverUrl);