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

  try {
    const postData = await fetch(`${baseUrl}${route}`, options);
    const response = await postData.json();

    if (!postData.ok && postData.status >= 400) {
      throw response;
    }

    return response;
  } catch (err) {
    alert(err.message);
    return false;
  }
};

export default post;
