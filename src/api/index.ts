import axios from "axios";
import { BASE_HTTP_URL } from "../constants";

const token = process.env.EXPO_PUBLIC_API_TOKEN;

export const api = axios.create({
  baseURL: `${BASE_HTTP_URL}`,
  headers: {
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  },
});
