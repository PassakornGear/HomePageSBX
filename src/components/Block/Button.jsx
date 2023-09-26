/* eslint-disable no-unused-vars */
import React from 'react';

// css
import './css/button.css'

export default function Buttons(btnName) {
    let status = btnName.data
    const getStatusColor = (status) => {
        // Define your color logic based on status here
        switch (status) {
            case 'Not Registered':
                return '#2b9fc8'
            case 'Not Evaluated':  /* In Progress */
                return '#ffb427'
            case 'Pending Registration':
                return '#ff5b26'
            case 'Pending Approval':
                return '#ff5b26'
            case 'Successful':
                return '#00AC4B'
            case 'Unsuccessful':
                return '#00AC4B'
            case 'Overdue':
                return '#FD513D'
            case 'Suspended':
                return '#FD513D'
            case 'Assigned':
                return '#ff5b26'
            case 'Re-Assigned':
                return '#ffb427'
            default:
                return '#4A89DC '; // Default color if status is not recognized
        }
    };

    const getStatusText = (status) => {
        if (status === "") {
            console.log("Status Not found....")
        } else if (status === "Not Evaluated") {
            return ("In Progress")
        } else {
            return (status)
        }
    }

    return (
        <>
            <a className='button-Default' style={{ backgroundColor: getStatusColor(status) }}><small>{getStatusText(status)}</small></a>
        </>
    )
}