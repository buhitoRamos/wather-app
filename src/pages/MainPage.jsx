import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from '../components/Appframe'
import { Paper } from '@material-ui/core'

// temporal
const cities = [
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR" },
    { city: ' Barcelona', country: 'España', countryCode:"ES" },
    {city: 'Bogota', country: 'Colombia', countryCode: "CO"},
    {city: 'Ciudad de México', country: 'México', countryCode: "MX"}
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = (city, countryCode) => {
      
         history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities}
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
