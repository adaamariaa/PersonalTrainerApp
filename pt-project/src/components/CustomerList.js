import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

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
        { field: "firstname"},
        { field: "lastname"},
        { field: "streetaddress"},
        { field: "postcode"},
        { field: "city"},
        { field: "email"},
        { field: "phone"},
        ]

    const defaultColDef = {
        sortable: true,
        filter: true,
        floatingFilter: true
    }




    return(
        <div>
            <div className="ag-theme-material"
          style={{height: '700px', width: '70%', margin: 'auto'}} >
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