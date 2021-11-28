import React from 'react'
import WeatherDetail from './WeatherDetail'

export default {
title: "WeatherDetail",
component: WeatherDetail
 }

 export const WeatherDetailExample = () => (<WeatherDetail humidity={80} wind={20} />)