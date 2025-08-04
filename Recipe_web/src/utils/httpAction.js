import { toast } from "react-toastify";

export const httpAction = async (data) => {
  try {
    const { url, method = 'GET', body, headers = {} } = data;

    const token = localStorage.getItem("accessToken");

    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, // 💥 this line is important!
        ...headers,
      },
      credentials: 'include',
    };

    if (method !== 'GET' && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);
    const result = await response.json();

    return result;

  } catch (error) {
    console.log(error);
    error.statusCode !== 403 && toast.error(error.message);
  }
};
