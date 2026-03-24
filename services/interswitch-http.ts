import axios from "axios";

const interswitchHttp = axios.create({
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default interswitchHttp;