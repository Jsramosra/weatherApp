import React from 'react';
import WeatherExtraInfo from './weatherExtraInfo';
import WeatherTemperature from './weatherTemperature';
import {
    CLOUD, CLOUDY, SUN, RAIN, SNOW, WINDY,
} from '../../../constants/weathers';
import './styles.css';

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={20}
            weatherState={WINDY}/>
        <WeatherExtraInfo humidity={88} wind={"10 m/s"} />
    </div>
);

export default WeatherData;