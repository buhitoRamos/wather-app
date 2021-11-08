import React from 'react'
import Weather from './Weather'

export default {
title: "Weather",
component: Weather
 }

 export const WeatherCloude = () => <Weather temperature={25} state={'cloud'}/>
 export const WeatherSunny = () => <Weather temperature={25} state={'sunny'}/>