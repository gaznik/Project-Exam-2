import apiRequest from '../../services/api/apiRequest';
import { BOOKINGS_URL } from '../../utils/constants';

export async function deleteBooking(id) {
    try {
        await apiRequest(`${BOOKINGS_URL}/${id}`, 'DELETE');
        console.log(`Booking with ID ${id} deleted successfully`);
    } catch (error) {
        console.error(`Error deleting booking with ID ${id}:`, error);
        throw error;
    }
}
