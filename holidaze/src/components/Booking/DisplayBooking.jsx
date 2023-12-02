import { useState } from 'react';
import BookingForm from './BookingForm.jsx';
import useBookingData from '../../hooks/useBookingData.js';
import BookingCalendar from './BookingCalendar.jsx';

function DisplayBooking() {
  const { events, loading, throwError } = useBookingData();
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelect = (date) => {
    if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1 && date > selectedDates[0]) {
      setSelectedDates([selectedDates[0], date]);
    } else {
      setSelectedDates([date]);
    }
  };
  

  if (loading) {
    return (
      <div>
        <p >Loading bookings ...</p>
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
          {BookingCalendar({ events, handleDateSelect, selectedDates })}
          </div>
          <BookingForm selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
        </div>
      </div>
    </div>
  );
}

export default DisplayBooking;