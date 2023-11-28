import { API_BASE_URL } from "./constants";

export async function makeApiRequest(endpoint, method = 'GET', data = null, limit = 10, offset = 0) {
  const url = `${API_BASE_URL}/${endpoint}?limit=${limit}&offset=${offset}`;

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
}
