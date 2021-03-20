import axios from 'axios';
import { config } from 'dotenv';
import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display';
import Spinner from './components/Spinner';
import './App.css';
import { validZipCode } from './utils/utils.js';

config();
const KEY = process.env.REACT_APP_WEATHER_API;

export const App = () => {
  const [zipCode, setZipCode] = useState('');
  const [invalidZipCode, setInvalidZipCode] = useState(false);
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);
  
  const getWeather = (event) => {
    if (!validZipCode(zipCode)) {
      setZipCode('');
      setInvalidZipCode(true);
      return undefined;
    };
    const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${KEY}`;
    
    // reset only if previously invalid.
    if (invalidZipCode) {
      setInvalidZipCode(false);
    };
    
    setZipCode('');
    setLoadingWeather(true);
    
    axios.get(WEATHER_URL)
      .then(response => {
        setWeather(response.data.main.temp);
        setLoadingWeather(false);
      });
  };

  return (
    <div className="App">
      <h1>Welcome to the Weather App!</h1>
      <Input value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
      <Button text="Get Weather" handleClick={getWeather} />
      {invalidZipCode && <p id="input-msg">Zip code must be 5 numerical digits</p>}
      {loadingWeather && <Spinner />}
      {!loadingWeather && weather && <Display weatherText={weather} />}
    </div>
  )
}

export default App;
