import axios from "axios";
import tokenService from "./token.service";


let token= tokenService.getToken()

const instance = axios.create({
  baseURL: "https://api.scafe.uz/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
});

export default instance;