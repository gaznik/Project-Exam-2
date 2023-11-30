import { makeApiRequest } from "../../utils/api/apiRequest"; 

export async function searchVenues(searchTerm, limit = 10, offset = 0) {
  try {
    const response = await makeApiRequest(endpoint, 'GET', searchTerm, limit, offset);
    return response;
  } catch (error) {
    console.error('Error searching venues:', error);
    throw error;
  }
}
