import { accessToken } from '../../utils/localStorage.js';

async function apiRequest(url = '', method = 'GET', data = {}, customHeaders = {}) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
    ...customHeaders,
  };

  const requestOptions = {
    method,
    headers,
  };

  if (method !== 'GET') {
    requestOptions.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, requestOptions);
  
    if (!response.ok) {
      console.error('Request failed:', response);
      throw new Error('Request failed');
    }
  
    if (response.status === 204) {
      return { status: 204 }; // Return a non-parsed response for 204 (No Content)
    }
  
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export default apiRequest;
