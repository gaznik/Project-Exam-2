import apiRequest from '../../services/api/apiRequest'; 
import { VENUES_URL } from "../../utils/constants";

async function fetchBookingsAndOwner(id) {
    const venueBookingsUrl = `${VENUES_URL}/${id}?_bookings=true&_owner=true`;

    try {
        const result = await apiRequest(venueBookingsUrl, 'GET', {}, {});
        
        const venueBookings = result.bookings;
        const venueOwner = result.owner.name;

        return { bookings: venueBookings, owner: venueOwner };
    } catch(error) {
        console.error('Error fetching bookings and owner:', error);
        throw error;
    }
}

export async function fetchBookingsWithOwner(id) {
    try {
        const { bookings, owner } = await fetchBookingsAndOwner(id);
        const eventList = bookings.map((booking) => ({
            start: new Date(booking.dateFrom),
            end: new Date(booking.dateTo),
            guests: booking.guests,
            venueId: booking.id
        }));

        return { bookings: bookings, owner: owner, events: eventList };
    } catch(error) {
        throw error;
    }
}
