import React from 'react'
import { render } from '@testing-library/react'
import WeatherDetail from './WeatherDetail'

test( "WeatherDetail render", async () => {

const { findByText } = render(<WeatherDetail humidity={90} wind={10} />)

const humidity = await findByText(/90/)
const wind = await findByText(/10/)
expect(wind).toHaveTextContent("Viento: 10km/h")
expect(humidity).toHaveTextContent("Humedad: 90%")

})