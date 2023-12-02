import apiRequest from '../api/apiRequest.js';
import { BOOKINGS_URL } from '../../utils/constants.js';

async function createBooking(booking) {
  try {
    const response = await apiRequest(BOOKINGS_URL, 'POST', booking);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
export default createBooking;