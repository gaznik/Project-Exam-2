import { VENUES_URL } from '../../utils/constants.js';
import apiRequest from '../../services/api/apiRequest.js'; 

export async function fetchVenueBookings(id) {
  const venueBookingsUrl = `${VENUES_URL}/${id}?_bookings=true&_owner=true`;

  try {
    const result = await apiRequest(venueBookingsUrl, 'GET');
    console.log('Booking Data:', result); //

    return result;
  } catch (error) {
    throw new Error('Failed to fetch venue bookings');
  }
}
