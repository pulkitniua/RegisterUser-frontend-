import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = ()=> {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/employee/getData')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);
    // Filter out records with empty data
    const filteredData = data.filter(item => item.username !== '');

    return (
        <div className="employee-list">
            <h1>List of Registered Users</h1>
            {filteredData.map(item => (
                <div className = "employee-card " key={item.employeeid}>
                    <p className = "employee-username">Username: {item.username}</p>
                    <p className = "employee-username">Address: {item.address}</p>
                    

                </div>
            ))}
        </div>
    );
}

export default FetchData;
