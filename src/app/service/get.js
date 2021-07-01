import axios from "axios";
import constants from "../utils/Constants";

const get = async route => {
  const { baseUrl } = constants;

  const response = await axios.get(`${baseUrl}${route}`);
  return response.data;
};

export default get;
