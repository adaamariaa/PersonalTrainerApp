import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { format } from 'date-fns';
import { Button } from '@mui/material';

export default function TrainingList(){

    const [trainings, setTrainings] = useState([]);

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/gettrainings')
        .then(response => response.json())
        .then(data => setTrainings(data))
        .catch(error => console.error(error));
    }

    useEffect(fetchData, []);


    const columns = [
        { field: "date", valueFormatter: (params) => {
            return format(new Date(params.data.date), 'dd.MM.yyyy HH:mm');
          }},
        { field: "duration"},
        { field: "activity"},
        { field: "firstname", valueGetter: (params) => {
            return params.data.customer.firstname;}},
        { field: "lastname", valueGetter: (params) => {
            return params.data.customer.lastname;}},
        { field: "id", headerName: "Delete", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <Button variant="text" color="secondary" onClick={() => deleteTraining(`https://traineeapp.azurewebsites.net/api/trainings/${params.data.id}`)}>
                    Delete</Button>
            ) 
        }}
        ]

    const defaultColDef = {
        sortable: true,
        filter: true,
        floatingFilter: true
    }

    const deleteTraining = url => {
        if (!window.confirm("Delete training?")) return;
       const options={
        method : 'delete'
       };

        fetch(url, options)
        .then(response => fetchData())
        .catch(error => console.error(error))
    }

    return(
        <div>
            <div className="ag-theme-material"
          style={{height: '700px', width: '100%', margin: 'auto'}} >
        <AgGridReact
            
            columnDefs={columns}
            rowData={trainings}
            defaultColDef={defaultColDef}
            >
            
        </AgGridReact>
        </div>
    </div>
    );
}