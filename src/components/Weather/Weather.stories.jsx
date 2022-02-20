import React from 'react'
import Weather from './Weather'

export default {
title: "Weather",
component: Weather
 }

  const template = (args) => <Weather {...args} />

 export const WeatherCloud = template.bind({})
 WeatherCloud.args = { temperature: 25, state: 'clouds'}
 
 export const WeatherSunny = template.bind({})
 WeatherSunny.args = { temperature:25, state: 'clear'}