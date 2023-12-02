import { useState } from 'react';
import Calendar from 'react-calendar';
import BookingForm from './BookingForm.jsx';
import useBookingData from '../../hooks/useBookingData.js';

function DisplayBookingsOfVenue() {
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
            <Calendar
              events={events}
              tileContent={({ date }) => {
                const bookedDates = events.filter(
                  (event) => date >= event.start && date <= event.end
                );
                return bookedDates.length > 0 ? (
                  <div style={{ backgroundColor: 'red' }}>X</div>
                ) : null;
              }}
              onClickDay={handleDateSelect}
              selectRange={true}
              value={selectedDates}
            />
          </div>
          <BookingForm selectedDates={selectedDates} setSelectedDates={setSelectedDates} />
        </div>
      </div>
    </div>
  );
}

export default DisplayBookingsOfVenue;