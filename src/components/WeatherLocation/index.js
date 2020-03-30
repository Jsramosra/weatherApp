import React from 'react';
import Location from './location';
import WeatherData from './WeatherData/index';
import './styles.css';
const WeatherLocation = () => (
    <div className="weatherLocationCont">
        <Location city={'Bogotá, Colombia'}></Location>
        <WeatherData></WeatherData>
    </div>
);

export default WeatherLocation;