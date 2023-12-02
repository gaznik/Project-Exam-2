import { useState } from 'react';
import BookingForm from './BookingForm.jsx';
import useBookingData from '../../hooks/useBookingData.js';
import BookingCalendar from './BookingCalendar.jsx';
import handleDateSelect from '../../services/handlers/dateSelectHandler.js';

function DisplayBooking() {
  const { events, loading, throwError } = useBookingData();
  const [selectedDates, setSelectedDates] = useState([]);

  const onDateSelect = (date) => {
    handleDateSelect(date, selectedDates, setSelectedDates);
  };

  if (loading) {
    return (
      <div>
        <p>Loading bookings...</p>
      </div>
    );
  }

  if (!loading && throwError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <div>
      <div>
        <div id="calendar">
          <h3>Available dates:</h3>
          <div>
            {BookingCalendar({ events, handleDateSelect: onDateSelect, selectedDates })}
          </div>
          <BookingForm selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
        </div>
      </div>
    </div>
  );
}

export default DisplayBooking;