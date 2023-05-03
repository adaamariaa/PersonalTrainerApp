import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import Button from '@mui/material/Button';
import AddCustomer from './AddCustomer';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import EditCustomer from './EditCustomer';
import AddTraining from './AddTraining';

export default function CustomerList(){

    const [customers, setCustomers] = useState([]);

    const fetchData = () => {
        fetch('https://traineeapp.azurewebsites.net/api/customers')
        .then(response => response.json())
        .then(data => setCustomers(data.content))
        .catch(error => console.error(error));
    }

    useEffect(fetchData, []);

    const columns = [
        { field: "links.0.href", headerName: "Add new training", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <AddTraining saveTraining={saveTraining} customer={params.data}/>
            )
        }},
        { field: "firstname"},
        { field: "lastname"},
        { field: "streetaddress"},
        { field: "postcode"},
        { field: "city"},
        { field: "email"},
        { field: "phone"},
        { field: "links.0.href", headerName: "Delete", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <Button onClick={() => deleteCustomer(params.value)}>
                    Delete</Button>
            ) 
        }},
        { field: "links.0.href", headerName: "Edit", sortable: false, floatingFilter: false, cellRenderer: params => {
            return(
                <EditCustomer customer={params.data} updateCustomer={updateCustomer}/>
            )
        }}
        ]

        const deleteCustomer = url => {
            if (!window.confirm("Delete customer?")) return;
           const options={
            method : 'delete'
           };

            fetch(url, options)
            .then(response => fetchData())
            .catch(error => console.error(error))
        }

        const updateCustomer = (url, customer) => {
            const options={
                method : 'put',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(customer)
                };
    
                fetch(url, options)
                .then(response => fetchData())
                .catch(error => console.error(error))
                
        }

        const saveCustomer = customer => {
            const options={
                method : 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(customer)
               };
    
                fetch('https://traineeapp.azurewebsites.net/api/customers', options)
                .then(response => fetchData())
                .catch(error => console.error(error))
                
        }

        const saveTraining = training => {
            const options={
                method : 'post',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(training)
               };
    
                fetch('https://traineeapp.azurewebsites.net/api/trainings', options)
                .then(response => fetchData())
                .catch(error => console.error(error))
                
        }


        

    const defaultColDef = {
        sortable: true,
        filter: true,
        floatingFilter: true
    }




    return(
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <div className="ag-theme-material"
                style={{height: '700px', width: '100%', margin: 'auto'}} >
        <AgGridReact
            columnDefs={columns}
            rowData={customers}
            defaultColDef={defaultColDef}
            >
            
        </AgGridReact>
        </div>
    </div>
    );
}