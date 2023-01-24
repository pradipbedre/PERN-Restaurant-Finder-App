import axios from "axios";

export default axios.create({
  /*   baseURL: process.env.SERVER, */
  baseURL: "http://localhost:3005/api/v1/restaurants",
});
