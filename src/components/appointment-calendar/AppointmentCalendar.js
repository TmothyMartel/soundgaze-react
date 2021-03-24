import React, { useState } from "react";
import Calendar from 'react-calendar';
import ReservationForm from '../reservation-form/ReservationForm.component'
import 'react-calendar/dist/Calendar.css';

function AppointmentCalendar() {
    const [ value, onChange ] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value} />
            <ReservationForm />
        </div>
    )
}

export default AppointmentCalendar;