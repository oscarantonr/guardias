import React from 'react';
import 'react-dates/initialize';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/Calendar.css';
import { useState } from 'react';
import './App.css';
import SingleCalendar from './SingleCalendar.js';
import RangeCalendar from './RangeCalendar.js';
import 'react-dates/initialize';
import Container from './Container';

function App() {
  return (
    <div className='app'>
      <Container />
    </div>
  );
}

export default App;
