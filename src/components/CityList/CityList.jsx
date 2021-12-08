import React from "react";
import  PropTypes  from "prop-types";
import CityInfo from './../CityInfo'
import Weather from  '../Weather'
import { Grid } from "@material-ui/core";
import { List, ListItem } from "@material-ui/core";

const renderCityAndCountry = eventOnclickCity => cityAndCountry => {
    const {city, country} = cityAndCountry
    return (
        <ListItem 
        key={city}
        button
        onClick={eventOnclickCity}>
            <Grid container
                justify="center"
                alignItems="center">
                <Grid item
                    md={8}
                    xs={12}>
                        <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                        <Weather temperature={10} state={'sunny'} />
                </Grid>               
            </Grid>
        </ListItem>
    )
}

const CityList = ({ cities, onClickCity }) => {
    return (
        <List>
        {
            cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
        }
        </List>
    )
}
CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired,
}
export default CityList