import apiRequest from '../api/apiRequest';
import { API_BASE_URL, VENUES_ENDPOINT } from '../../utils/constants';

export async function fetchVenueDetails(id) {
  try {
    const endpoint = `${API_BASE_URL}${VENUES_ENDPOINT}/${id}`;
    const response = await apiRequest(endpoint, 'GET');
    return response;
  } catch (error) {
    console.error('Error fetching venue details:', error);
    throw error;
  }
}
