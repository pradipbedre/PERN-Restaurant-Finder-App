import axios from "axios";

export default axios.create({
  /*   baseURL: process.env.SERVER, */
  baseURL: "https://pradip-restaurants-backend.onrender.com/api/v1/restaurants",
});
