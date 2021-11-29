import React from 'react'
import ForecastItem from './ForecastItem'

export default {
title: "ForecastItem",
component: ForecastItem
 }
 export const ForecastItemExample = () => (<ForecastItem
    weekDay={'Lunes'} 
    hour={12} 
    state={"sunny"} 
    temperature={40}/>)