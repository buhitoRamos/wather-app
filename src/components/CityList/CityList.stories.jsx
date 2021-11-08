import React from 'react'
import CityList from './CityList'

export default {
title: "CityList",
component: CityList
 }
 const cities = [
     {city: "Buenos Aires", country: "Argentina"},
     {city: ' Barcelona', country: 'España'}
 ]
 export const CityListExample = () => (<CityList cities={cities}></CityList>)