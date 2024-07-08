import axios from "axios";
import { BASE_HTTP_URL } from "../constants";

const token = process.env.API_TOKEN;

export const api = axios.create({
  baseURL: `${BASE_HTTP_URL}`,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWM2NmNkMGY2OTQxMTUxZDZiODQxMzI0Y2FkNTgwOCIsIm5iZiI6MTcyMDM4Nzk0Mi4yMjM2NjMsInN1YiI6IjY2MWViZWQyZWNhZWY1MDE2M2Y4ZjFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fWK3jeQErSwGeLmiNKyZ2Ztiq_FBlPMQVudRSfuy6Y `,
    accept: "application/json",
  },
});
