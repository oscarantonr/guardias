import { useState } from 'react';
import React from 'react';
import 'react-dates/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController, isInclusivelyBeforeDay } from 'react-dates';
import moment from "moment";
import 'moment/locale/es'
import 'react-dates/lib/css/_datepicker.css';
import { render } from '@testing-library/react';
import './styles/Calendar.css';

export const RangeCalendar = ({ minDate, maxDate }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [focusedInput, setFocusedInput] = useState(Boolean);

    const handleDatesChange = (evt) => {
        // setStartDate(startDate);
        // setEndDate(endDate);
        if (evt.startDate) {
            setStartDate(evt.startDate);
        } else {
            setStartDate(null)
        }
        if (evt.endDate) {
            setEndDate(evt.endDate);
        } else {
            setEndDate(null)
        }
        console.log('Start is: ' + startDate);
        console.log('End is: ' + endDate);
    };

    const isOutsideRange = day =>
        day.isAfter(maxDate) || day.isBefore(minDate);

    const handleClose = () => {
        setFocusedInput(false);
    }
    return (
        <div className='rangeDate'>
            <DateRangePicker
                startDate={startDate}
                startDateId="start_date_id"
                endDate={endDate}
                endDateId="end_date_id"
                onDatesChange={evt => handleDatesChange(evt)}
                focusedInput={focusedInput}
                onFocusChange={focusedInput => setFocusedInput(focusedInput)}
                displayFormat="DD-MM-YYYY"
                monthFormat="MMMM YYYY"
                showClearDates={true}
                calendarInfoPosition="after"
            // isOutsideRange={isOutsideRange} 
            />
        </div>
    )
}

export default RangeCalendar;