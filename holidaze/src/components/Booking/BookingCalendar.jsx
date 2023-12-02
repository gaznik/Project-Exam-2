import React from 'react';
import Calendar from 'react-calendar';

function BookingCalendar({ events, handleDateSelect, selectedDates }) {
  return (
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
  );
}

export default BookingCalendar;
