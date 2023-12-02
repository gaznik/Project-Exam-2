import apiRequest from '../api/apiRequest';
import { API_BASE_URL, VENUES_ENDPOINT } from '../../utils/constants';

export async function fetchVenuesList(limit = 10, offset = 0) {
  try {
    const endpoint = `${API_BASE_URL}${VENUES_ENDPOINT}?limit=${limit}&offset=${offset}`;
    const response = await apiRequest(endpoint, 'GET');
    return response;
  } catch (error) {
    console.error('Error fetching venues:', error);
    throw error;
  }
}
