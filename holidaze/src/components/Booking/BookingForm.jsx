import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import createBooking from '../../services/handlers/bookingHandler';
import { isLoggedIn } from '../../utils/userStatus';

function adjustDateForTimezone(date) {
  const tzOffset = date.getTimezoneOffset();
  const adjustedDate = new Date(date.getTime() - tzOffset * 60000);
  return adjustedDate.toISOString().split('T')[0];
}

function BookingForm({ selectedDates, setSelectedDates }) {
  const { handleSubmit, control } = useForm();
  let { id } = useParams();

  const handleDateChange = (event) => {
    const { id, value } = event.target;
    const selectedDate = new Date(value + 'T00:00:00');

    if (id === 'startDate') {
      setSelectedDates([selectedDate, selectedDates[1]]);
    } else if (id === 'endDate') {
      setSelectedDates([selectedDates[0], selectedDate]);
    }
  };

  const onSubmit = async (data) => {
    const adjustDateForSubmission = (date) => {
      if (!date) return null;
      const tzOffset = date.getTimezoneOffset();
      const adjustedDate = new Date(date.getTime() - tzOffset * 60000);
      return adjustedDate.toISOString().split('T')[0];
    };

    const body = {
      dateFrom: adjustDateForSubmission(selectedDates[0]),
      dateTo: adjustDateForSubmission(selectedDates[1]),
      guests: parseInt(data.guests),
      venueId: id,
    };

    try {
      const response = await createBooking(body);
    } catch (error) {
      console.error('Error creating booking:', error);
    }
  };

  return (
    <div>
      {!isLoggedIn() && <p>Please log in to book.</p>}
      {isLoggedIn() && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            value={selectedDates[0] ? adjustDateForTimezone(selectedDates[0]) : ''}
            onChange={handleDateChange}
          />
          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            value={selectedDates[1] ? adjustDateForTimezone(selectedDates[1]) : ''}
            onChange={handleDateChange}
          />
          <div>
            <label htmlFor="guests">Guests:</label>
            <Controller
              name="guests"
              control={control}
              defaultValue=""
              render={({ field }) => <input {...field} type="number" />}
            />
          </div>
          <div>
            <button type="submit">Book now</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default BookingForm;
