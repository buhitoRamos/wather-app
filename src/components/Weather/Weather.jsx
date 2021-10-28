import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import  Typography  from '@material-ui/core/Typography'
import { WiCloud } from 'react-icons/wi'
import { IconContext } from 'react-icons/lib'
const Weather = ({ temperature }) => {
    return (
        <div>
            <IconContext.Provider value={{ size: '4em'}}>
            <WiCloud></WiCloud>
            </IconContext.Provider>
            <Typography display="inline" variant='h2'>{temperature}</Typography>
        </div>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired
}

export default Weather
