//rafcp importa todo lo necesario
import React from 'react'
import PropTypes from 'prop-types'
import { WiDayCloudy, WiDaySunny, WiRain, WiSnow, WiRaindrop, WiThunderstorm } from 'react-icons/wi'


//creo objeto con todos los iconos importados que podria utilizar
const stateByName = {
    clouds: WiDayCloudy,
    clear: WiDaySunny,
    rain: WiRain,
    snow: WiSnow,
    drizzle: WiRaindrop,
    thunderstorm: WiThunderstorm
}
export const validValues = [
    'clouds',
    'fog',
    'clear',
    'rain',
    'snow',
    'drizzle',
    'thunderstorm'

]


const IconState = ({ state }) => {
    const StateByName = stateByName[state]
    return (
        <StateByName />
    )
}

IconState.propTypes = {
    state: PropTypes.oneOf(validValues).isRequired,
}

export default IconState
