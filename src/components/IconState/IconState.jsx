//rafcp importa todo lo necesario
import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow, WiRaindrop, WiThunderstorm, WiFog, WiCloud, WiDayHaze } from 'react-icons/wi'


//creo objeto con todos los iconos importados que podria utilizar
const stateByName = {
    cloudy: WiDayCloudy,
    clear: WiDaySunny,
    sunny: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm,
    fog: WiFog,
    clouds: WiCloud,
    haze: WiDayHaze,
    mist: WiDayCloudy

}
export const validValues = [
    'cloudy',
    'fog',
    'clear',
    'rain',
    'snow',
    'drizzle',
    'thunderstorm',
    'clouds',
    'sunny',
    'haze',
    'mist'

]


const IconState = ({ state }) => {
    const StateByName = stateByName[state] || WiDaySunny
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
