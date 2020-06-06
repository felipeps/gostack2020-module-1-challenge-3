import axios from "axios";

const api = axios.create({
  baseURL: "http://f802bb61647f.ngrok.io",
});

export default api;
