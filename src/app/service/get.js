import constants from "../utils/Constants";

const get = async route => {
  const { baseUrl } = constants;
  const response = await fetch(`${baseUrl}${route}`);

  return response;
};

export default get;
