import React from 'react'
import PropTypes from 'prop-types'
import 'typeface-roboto'
import  Typography  from '@material-ui/core/Typography'

const CityInfo = ({city, country}) => {
    return (
        <>
            <Typography variant='h4' display='inline'> {city}, </Typography>
            <Typography variant='h6' display='inline'>{country}</Typography>
        </>
    )
}

CityInfo.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired

}

export default CityInfo
