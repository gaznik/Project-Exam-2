import { useEffect, useState } from 'react';
import { fetchVenueBookings } from '../services/handlers/bookingDataHandler';
import { useParams } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';

function useBookingData() {
    const { id } = useParams(); 
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [throwError, setThrowError] = useState(false);
    const [bookings, setBookings] = useState([]);
    const [owner, setOwner] = useState();

    useEffect(() => {
        async function getBookings() {
            try {
                if (id) {
                    setLoading(true);
                    setThrowError(false);

                    const result = await fetchVenueBookings(id);

                    const venueBookings = result.bookings;
                    const venueOwner = result.owner.name;

                    setOwner(venueOwner);
                    setBookings(venueBookings);

                    const eventList = venueBookings.map((booking) => ({
                        start: new Date(booking.dateFrom),
                        end: new Date(booking.dateTo),
                        guests: booking.guests,
                        venueId: booking.id
                    }));

                    setEvents(eventList);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                setThrowError(true);
                console.log(error);
            }
        }

        getBookings();
    }, [id]);

    return { events, bookings, owner, loading, throwError };
}

export default useBookingData;
