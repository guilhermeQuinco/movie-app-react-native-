import axios from "axios";
import { BASE_HTTP_URL } from "../constants";

export const api = axios.create({
  baseURL: `${BASE_HTTP_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.API_TOKEN}`,
    accept: "application/json",
  },
});
