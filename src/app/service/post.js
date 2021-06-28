import constants from "../utils/Constants";

const post = async (route, data) => {
  const { baseUrl } = constants;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${baseUrl}${route}`, options);
  return response;
};

export default post;
