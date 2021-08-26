import axios from "axios";
import constants from "../utils/Constants";

const post = async (route, data) => {
  const { baseUrl } = constants;

  const response = await axios.post(`${baseUrl}${route}`, data);
  return response.data;
};

export default post;
