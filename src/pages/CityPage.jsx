import React from 'react'
import Grid from '@material-ui/core/Grid'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetail from '../components/WeatherDetail'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/Appframe/AppFrame'

const CityPage = props => {
    const city = "Bs As"
    const country = "Arg"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5
    const data = [
        {
            "dayHour": "Jue 18",
            "min": 14,
            "max": 22,
        },
        {
            "dayHour": "Vie 06",
            "min": 18,
            "max": 27,
        }
    ]
    const forecastItemListExample = [
        {
            weekDay: 'Lunes',
            hour: 12,
            state: "sunny",
            temperature: 20
        },
        {
            weekDay: 'Martes',
            hour: 11,
            state: "fog",
            temperature: 30
        },
        {
            weekDay: 'Miercoles',
            hour: 15,
            state: "rain",
            temperature: 20
        }
    ]
    return (
        <AppFrame>
            <Grid container
                justify="space-around"
                direction="column"
                spacing={2}>
                <Grid item container xs={12}
                    justify="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justify="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item >
                    <ForecastChart data={data} />
                </Grid>
                <Grid item >
                    <Forecast forecastItemList={forecastItemListExample} />
                </Grid>
            </Grid>
        </AppFrame>
    )
}



export default CityPage
