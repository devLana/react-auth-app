import constants from "../utils/Constants";

const get = async route => {
  const { baseUrl } = constants;

  try {
    const getData = await fetch(`${baseUrl}${route}`);
    const response = await getData.json();

    if (!getData.ok && getData.status >= 400) {
      throw response;
    }

    return response;
  } catch (err) {
    alert(err.message);
    return false;
  }
};

export default get;
