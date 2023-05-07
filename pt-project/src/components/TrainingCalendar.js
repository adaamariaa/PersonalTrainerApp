import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

export default function TrainingCalendar(){
    
    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(error => console.error(error));
    }

const events = trainings.map((training) => ({
    title: training.activity,
    start: new Date(training.date),
    end: moment(training.date).add(training.duration, "minutes").toDate(),
}));

    useEffect(fetchData, []);


    return(
 <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, color: '#912bab' }}
    />
  </div>
    )
}