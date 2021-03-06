import React from 'react'
import Forecast from './Forecast'

export default {
title: "Forecast",
component: Forecast
 }
 const forecastItemList = [
     {
         weekDay: 'Lunes',
         hour: 12,
         state: "clouds",
         temperature: 20
     },
     {
        weekDay: 'Martes',
        hour: 11,
        state: "drizzle",
        temperature: 30
    },
    {
        weekDay: 'Miercoles',
        hour: 15,
        state: "rain",
        temperature: 20
    }
 ]
 export const ForecastExample = () => (<Forecast forecastItemList={forecastItemList}/>)