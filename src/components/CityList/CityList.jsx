import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import convertUnits from 'convert-units'
import { Alert } from '@material-ui/lab'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import CityInfo from './../CityInfo'
import Weather from './../Weather'

const getCityCountry = (city, country) => `${city}-${country}`
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, country } = cityAndCountry
    // const { temperature, state } = weather

    return (
        <ListItem
            button
            key={city}
            onClick={eventOnClickCity} >
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
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {

    const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, country) => {
            const appid = "f99bbd9e4959b513e9bd0d7f7356b38d"
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`;

            try {
                const response = await axios.get(url)
                const { data } = response
                const temperature = Number(convertUnits(data.main.temp).from('K').to('C').toFixed(0))
                const state = data.weather[0].main.toLowerCase()
                const propName = getCityCountry(city, country) // Ej: [Ciudad de México-México]
                const propValue = { temperature, state } // Ej: { temperature: 10, state: "sunny" }
                setAllWeather(allWeather => ({ ...allWeather, [propName]: propValue }))

            } catch (error) {
                if (error.response) { // error que nos responde el servidor
                    setError("Ha ocurrido un error en el servidor del clima")
                } else if (error.request) {  //error por no llegar al servidor
                    setError("Verifique la conexion a internet")

                } else { //errores imprevistos
                    setError("error al cargar los datos")
                }
            }

        }

        cities.forEach(({ city, country }) => {
            setWeather(city, country)
        });

    }, [cities])

    //const weather = { temperature: 10, state: "sunny" }

    return (
        <div>
            {
                error && <Alert onClose={()=> setError(null)} severity='error'>{error}</Alert>
            }
           <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, 
                    allWeather[getCityCountry(cityAndCountry.city, cityAndCountry.country)]))
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
          
        })
    ).isRequired,
    onClickCity: PropTypes.func.isRequired,
}

export default CityList