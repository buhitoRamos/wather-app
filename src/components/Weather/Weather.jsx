import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { Skeleton } from '@material-ui/lab'
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
                {   state ?
                    <IconState state={state} />
                    :
                    <Skeleton variant='circle' height={80} width={80}></Skeleton>
                }
            </IconContext.Provider>
            {temperature ?
                <Typography display="inline" variant='h2'>{temperature}</Typography>
                : 
                <Skeleton value='react' height={80} width={80}></Skeleton>
            }
        </Grid>
    )
}

Weather.propTypes = {
    temperature: PropTypes.number,
    state: PropTypes.oneOf(validValues),
}

export default Weather
