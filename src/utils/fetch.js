import axios from "axios";

const SERVER_URL = "http://localhost:5000/api";

export async function fetch(path, options) {
  const { method = "get", data = null, headers = {} } = options || {};

  const token = localStorage.getItem('token');

  if (token) {
    headers.token = token;
  }

  const requestParams = {
    url: `${SERVER_URL}${path}`,
    method,
    headers: {
      ...headers,
    },
    data,
  };
  if (method === "get") {
    delete requestParams.data;
  }

  try {
    const { data } = await axios(requestParams);
    return data;
  } catch (err) {
    console.error("API Error", err);
    throw err;
  }
}
