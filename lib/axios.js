import axios from "axios";

const straxios = axios.create({
  baseURL: process.env.STRAPI_BASE_URL,
});

export default straxios;
