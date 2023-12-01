import { API_BASE_URL, VENUES_ENDPOINT } from '../../utils/constants';

export async function fetchAllVenues(offset = 0, venuesSoFar = []) {
  try {
    const venueUrl = `${API_BASE_URL}${VENUES_ENDPOINT}`;
    const response = await fetch(`${venueUrl}?offset=${offset}&limit=100`);
    const result = await response.json();
    const updatedVenues = [...venuesSoFar, ...result];

    if (result.length === 100) {
      return fetchAllVenues(offset + 100, updatedVenues);
    } else {
      return updatedVenues;
    }
  } catch (error) {
    console.log(error);
    return venuesSoFar;
  }
}
