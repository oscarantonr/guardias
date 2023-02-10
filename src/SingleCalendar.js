import { useState } from 'react';
import React from 'react';
import 'react-dates/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SingleDatePicker } from 'react-dates';
import moment from "moment";
import 'moment/locale/es'
import 'react-dates/lib/css/_datepicker.css';
import './styles/Calendar.css';

export const SingleCalendar = props => {
    const [focused, setFocused] = useState(Boolean);
    const [dateFinal, setDate] = useState(null);
    const [totalMonths, setTotalMonth] = useState(null);
    const { handleAddItem } = props;

    const handleSubmit = e => {
        e.preventDefault();
        handleAddItem({
            done: false,
            id: (+new Date()).toString(),
            dateFinal: moment(dateFinal._d).format('DD/MM/YYYY')
        });
        setDate("");
    };

    const onFocusChange = ({ focused }) => {
        setFocused(focused);
        if (window.innerWidth <= 768) {
            setTotalMonth(1);
        } else {
            setTotalMonth(2);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='singleDate form-group col-12'>
                    <SingleDatePicker
                        date={dateFinal}
                        id="date_picker_start_date_id"
                        onDateChange={setDate}
                        focused={focused}
                        onFocusChange={onFocusChange}
                        displayFormat="DD-MM-YYYY"
                        monthFormat="MMMM YYYY"
                        hideKeyboardShortcutsPanel={true}
                        // showClearDate={true}
                        // noBorder={true}
                        // onClose={(e) => handleClose(e.date._d)}
                        numberOfMonths={totalMonths}
                        showDefaultInputIcon
                        inputIconPosition="after"
                    />
                    <button
                        className="button pink"
                        disabled={dateFinal ? "" : "disabled"}
                    >
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}

export default SingleCalendar;