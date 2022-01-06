import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { IconContext } from 'react-icons/lib'
import IconState, {validValues} from '../IconState'


const Weather = ({ temperature, state }) => {
    return (
        <Grid container item
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}>
            <IconContext.Provider value={{ size: '6em' }}>
                <IconState state={state}/>
            </IconContext.Provider>
            <Typography display="inline" variant='h2'>{temperature}</Typography>
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.oneOf(validValues).isRequired,
}

export default Weather
