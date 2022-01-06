 import React from 'react'
 import Forecast from './Forecast'
 import { render } from '@testing-library/react'
 const forecastItemList = [
    {
        weekDay: 'Lunes',
        hour: 12,
        state: "clear",
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
 test('Forecast render', async ()=> {
     const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList}/>)
     const forecastItems =  await findAllByTestId("forecast-item-container")
     expect(forecastItems).toHaveLength(3)

 })