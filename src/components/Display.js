import React from 'react'
import Spinner from './Spinner.js';

export const Display = ({ weatherText }) => {
    const weather = parseInt(weatherText, 10) * (9/5) - 459.67;
    const infoStyles = {
        border: "2px solid black",
        margin: "10rem 10rem",
    };
    
    if (weather) {
        return (
            <div id="info-display" style={infoStyles}>
                <p>Weather: {weather.toFixed(2)} F</p>
            </div>
        )
    }
}

export default Display;