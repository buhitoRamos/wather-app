import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from '../ForecastItem/ForecastItem'
import  {validValues} from '../IconState'
//import rafcp para que genere el esqueleto

const renderForecastItem = forecast => {
    const {hour, weekDay, state, temperature} = forecast
    return (
        <Grid
        data-testid="forecast-item-container"
        item key={`${weekDay} ${hour}`}>
            <ForecastItem hour={hour}
            weekDay={weekDay}
            state={state}
            temperature={temperature} />
        </Grid>
    )
}
const Forecast = ({forecastItemList}) => {
    return (
        <Grid container
        justifyContent="space-around"
        alignItems="center">
            {
                forecastItemList.map(forecast =>renderForecastItem(forecast))
            }   
        </Grid>
    )
}

Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
    temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forecast
