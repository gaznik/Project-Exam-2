import useDataRetrieval from '../../services/api/useDataRetrieval.js';
import { PROFILE_BOOKINGS_URL } from '../../utils/constants.js';
import { Link } from 'react-router-dom';
import { deleteBooking } from '../../services/handlers/deleteBookingHandler.js';

function MyBookings() {
    const { data, loading, throwError } = useDataRetrieval(PROFILE_BOOKINGS_URL);

    const handleDelete = async (id) => {
        try {
            await deleteBooking(id);
            // Handle UI updates or refetch data if necessary
        } catch (error) {
            // Handle any error occurred during deletion
        }
    };

    if (loading) {
        return (
            <div>
                <img src='/icons/loading.png' alt='Loading' />
                <p>Loading your bookings...</p>
            </div>
        );
    }

    if (throwError) {
        return <div>Something went wrong. Try again</div>;
    }

    if (data.length < 1) {
        return (
            <div>
                <p>You don't have any bookings yet</p>
                <div>
                    <Link to='/'>Browse available venues</Link>
                </div>
            </div>
        );
    }

    return (
        <div>
            {data.map((booking) => {
                const { id, dateFrom, dateTo, venue } = booking;
                const formattedDateFrom = dateFrom.split('T')[0];
                const formattedDateTo = dateTo.split('T')[0];
                return (
                    <div key={id}>
                        <Link to={`/venues/${venue.id}`}>
                            <div>
                                <div>
                                    {venue.media && venue.media.length > 0 && (
                                        <img src={venue.media[0]} alt="Venue" />
                                    )}
                                    <h3>{venue.name}</h3>
                                </div>
                                <div>
                                    <div>
                                        <p>From:</p>
                                        <p>{formattedDateFrom}</p>
                                    </div>
                                    <div>
                                        <p>To:</p>
                                        <p>{formattedDateTo}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <button
                            onClick={async () => {
                                try {
                                    await handleDelete(id);
                                    window.location.reload();
                                } catch (error) {
                                }
                            }}
                        >
                            Cancel Booking
                        </button>
                    </div>
                );
            })}
        </div>
    );
}

export default MyBookings;
