import { API_BASE_URL } from "../../utils/constants";

export async function makeApiRequest(endpoint, method = 'GET', data = null) {
  const url = `${API_BASE_URL}${endpoint}`;

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : null,
  };

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
