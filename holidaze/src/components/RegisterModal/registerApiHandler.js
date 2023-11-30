import { makeApiRequest } from '../../utils/api/apiRequest';
import { REGISTER_ENDPOINT } from '../../utils/api/constants';



export async function registerUser(userData) {
  try {
    console.log('Request Payload:', userData); 
    const response = await makeApiRequest(REGISTER_ENDPOINT, 'POST', userData);
    return response; 
  } catch (error) {
    console.error('API Request Error:', error);
    throw error; 
  }
}
