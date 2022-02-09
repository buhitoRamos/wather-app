import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Alert } from '@material-ui/lab'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import useCityList from '../../hooks/useCityList'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'
import { getCityCode } from '../../utils/utils'

const areEql = (prev, next) => {
console.log('city', prev.city === next.city)
console.log('countryCode', prev.countryCode === next.countryCode)
console.log('country', prev.country === next.country)
console.log('weather', prev.weather === next.weather)
console.log('evenOnClickCity', prev.evenOnClickCity === next.evenOnClickCity)
return false

}

const CityListItem = React.memo(({city, countryCode, country, eventOnClickCity, weather}) => {
    return (
        <ListItem
            button
            onClick={() => eventOnClickCity(city, countryCode) }>
            <Grid container
                justifyContent="center"
                alignItems="center"
            >
                <Grid item
                    md={9}
                    xs={12}>
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                    <Weather
                        temperature={weather && weather.temperature}
                        state={weather && weather.state} />
                </Grid>
            </Grid>
        </ListItem>
    )
}, areEql)
CityListItem.displayName='CityListItem'

const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city } = cityAndCountry

    return <CityListItem key={city} eventOnClickCity={eventOnClickCity} {...cityAndCountry} weather={weather} />
       
}


const CityList = ({ cities, onClickCity}) => {

const actions = useContext(WeatherDispatchContext)
const data = useContext(WeatherStateContext)
    const { allWeather } = data
    const {error, setError} =  useCityList(cities, allWeather, actions)

    return (
        <div>
            {
                error && <Alert onClose={()=> setError(null)} severity='error'>{error}</Alert>
            }
           <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
            }
           </List> 
        </div>
        
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(
        PropTypes.shape({
            city: PropTypes.string.isRequired,
            country: PropTypes.string.isRequired,
            countryCode: PropTypes.string.isRequired
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default React.memo(CityList)