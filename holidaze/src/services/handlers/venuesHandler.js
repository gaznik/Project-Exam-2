import { makeApiRequest } from '../api/apiRequest';
import { VENUES_ENDPOINT } from '../../utils/constants';


export async function fetchVenuesList(limit = 10, offset = 0) {
  try {
    const endpoint = `${VENUES_ENDPOINT}?limit=${limit}&offset=${offset}`;
    const response = await makeApiRequest(endpoint, 'GET');
    return response; 
  } catch (error) {
    console.error('Error fetching venues:', error);
    throw error;
  }
}
