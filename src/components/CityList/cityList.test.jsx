import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList'
import { WeatherContext } from '../../WeatherContext'


const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: ' Barcelona', country: 'España' }
]
test("CityList renders", async () => {
    const { findAllByRole } = render(
        <WeatherContext>
            <CityList cities={cities} onClickCity={() => { }} />
        </WeatherContext>)
    const items = await findAllByRole("button")

    expect(items).toHaveLength(2)
})
test("CityList click on item", async () => {
    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(
        <WeatherContext>
            <CityList cities={cities} onClickCity={fnClickOnItem} />
        </WeatherContext>)

    const items = await findAllByRole("button")
    fireEvent.click(items[0])
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})