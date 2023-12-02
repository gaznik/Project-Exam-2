import { VENUES_URL } from '../../utils/constants.js';
import { accessToken } from '../../utils/localStorage.js';

export async function fetchVenueBookings(id) {
    const venueBookingsUrl = `${VENUES_URL}/${id}?_bookings=true&_owner=true`;

    try {
        const bookingData = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify()
        };

        const response = await fetch(venueBookingsUrl, bookingData);
        const result = await response.json();
        console.log('Booking Data:', result); //

        return result;
    } catch (error) {
        throw new Error('Failed to fetch venue bookings');
    }
}
