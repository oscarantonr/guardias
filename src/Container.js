import React from 'react'
import moment from 'moment';
import { useState } from 'react';
import SingleCalendar from './SingleCalendar';
import ListDates from './ListDates';

const Container = () => {
    moment.locale('es');
    // const minDateString = '07-15-2020';
    // const maxDateString = '07-15-2022';
    // const minDateMoment = moment(minDateString, 'MM-DD-YYYY');
    // const maxDateMoment = moment(maxDateString, 'MM-DD-YYYY');

    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };

    return (
        <div className='main-container'>
            {/* <form className='formOne'> */}
            {/* <div className="form-group col-6">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div> */}
            {/* <div className="form-group col-6"> */}
            <div className='row'>
                <div className='col-12 single-cal'>
                    <SingleCalendar handleAddItem={handleAddItem} />
                </div>
            </div>
            <div className='row'>
                <div className='col-12 single-list'>
                    <ListDates list={list} setList={setList} />
                </div>
            </div>
            {/* <RangeCalendar minDate={minDateMoment}
        maxDate={maxDateMoment} /> */}
            {/* </div> */}
            {/* <button type="submit" className="btn btn-primary">Submit</button> */}
            {/* </form> */}
        </div>
    )
}

export default Container