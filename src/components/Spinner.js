import React from 'react';
import './Spinner.css';

export const Spinner = () => {
    return (
        <div id="spinner-container">
            <p>Loading...</p>
            <div className="spinner"></div>
        </div>
    )
}

export default Spinner;