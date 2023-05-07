import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { groupBy } from 'lodash';

export default function StaticList () {

    const [trainings, setTrainings] = useState([]);
    
    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
        .then(response => response.json())
        .then(data => {
            const orderedTrainings = groupBy(data, 'activity');
            const combinedTrainings = Object.keys(orderedTrainings).map(activity => {
                const duration = orderedTrainings[activity].reduce((total, training) => total + training.duration, 0);
                return { activity, duration };
            });
            setTrainings(combinedTrainings);
        })
        .catch(error => console.error(error))
}

    useEffect(fetchData, []);



    return(
        <BarChart width={600} height={300}  data={trainings} margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
        }}>
            <XAxis dataKey="activity" />
            <YAxis dataKey="duration"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="duration" barSize={30} fill="#912bab"/>
        </BarChart>
    )
}