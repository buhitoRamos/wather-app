import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import Typography from '@material-ui/core/Typography'
import { WiCloud, WiDayCloudy, WiDayFog, WidaySunny, WiDaySunny, WiRain } from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'


//creo objeto con todos los iconos importados que podria utilizar
const stateByName = {
    cloud: WiCloud,
    cloudy: WiDayCloudy,
    fog: WiDayFog,
    sunny: WiDaySunny,
    rain: WiRain
}
// otra manera de acceder a una propiedad de un objeto y me ahorro un switch
const renderState = state => {
    const Icon = stateByName[state] 
    return <Icon />
}

const Weather = ({ temperature, state }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '4em' }}>
                { renderState(state) }
            </IconContext.Provider>
            <Typography display="inline" variant='h2'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
}

export default Weather
