function handleDateSelect(date, selectedDates, setSelectedDates) {
    if (selectedDates.length === 0) {
      setSelectedDates([date]);
    } else if (selectedDates.length === 1 && date > selectedDates[0]) {
      setSelectedDates([selectedDates[0], date]);
    } else {
      setSelectedDates([date]);
    }
  }
  
  export default handleDateSelect;
  