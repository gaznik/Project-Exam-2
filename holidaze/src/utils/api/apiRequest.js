import { API_BASE_URL } from "./constants";

export async function makeApiRequest(endpoint, method = 'GET', searchTerm = '', limit = 10, offset = 0) {
  const encodedSearchTerm = encodeURIComponent(searchTerm);
  const url = `${API_BASE_URL}/${endpoint}?limit=${limit}&offset=${offset}&search=${encodedSearchTerm}`;

  const requestOptions = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
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
