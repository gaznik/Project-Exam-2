
export async function makeApiRequest(url, method = 'GET', data = null) {
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
  