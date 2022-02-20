import React from 'react'
import CityList from './CityList'
import { action} from '@storybook/addon-actions'
import { WeatherContext } from '../../WeatherContext'

export default {
title: "CityList",
component: CityList
 }
 const cities = [
     {city: "Buenos Aires", country: "Argentina", countryCode:'ARG'},
     {city: ' Barcelona', country: 'España', countryCode: 'ES'},
 ]
 export const CityListExample = () => (<WeatherContext> <CityList cities={cities} onClickCity={action("click on city")}/>  </WeatherContext> )