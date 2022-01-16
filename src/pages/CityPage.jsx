import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import 'moment/locale/es'
import convertUnits from 'convert-units'
import Grid from '@material-ui/core/Grid'
import { useParams } from 'react-router-dom'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetail from '../components/WeatherDetail'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/Appframe/AppFrame'


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
const CityPage = props => {
    const { city, countryCode } = useParams()
    const [data, setData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    useEffect(() => {
        const getForecast = async () => {
            const appid = "f99bbd9e4959b513e9bd0d7f7356b38d"
            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`;

            try {
                const { data } = await axios.get(url)

                const daysAhead = [0, 1, 2, 3, 4, 5]
                const days = daysAhead.map(day => moment().add(day, 'd'))
                const dataAux = days.map(day => {

                    const tempObjArray = data.list.filter(item => {
                        const dayOfYear = moment.unix(item.dt).dayOfYear()
                        return dayOfYear === day.dayOfYear()

                    })
                    const temps = tempObjArray.map(item => Number(convertUnits(item.main.temp).from('K').to('C').toFixed(0)))
                    return ({
                        dayHour: day.format('ddd'),
                        min: Math.min(...temps),
                        max: Math.max(...temps),
                    })
                })
                setData(dataAux)
                setForecastItemList(forecastItemListExample)

            } catch (error) {
                console.log(error)
            }

        }

        getForecast()
    }, [city, countryCode])
    const country = "Arg"
    const state = "cloudy"
    const temperature = 20
    const humidity = 80
    const wind = 5

    return (
        <AppFrame>
            <Grid container
                justifyContent="space-around"
                direction="column"
                spacing={2}>
                <Grid item container xs={12}
                    justifyContent="center"
                    alignItems="flex-end">
                    <CityInfo city={city} country={country} />
                </Grid>
                <Grid container item xs={12}
                    justifyContent="center">
                    <Weather state={state} temperature={temperature} />
                    <WeatherDetail humidity={humidity} wind={wind} />
                </Grid>
                <Grid item >
                    {
                        data && <ForecastChart data={data} />
                    }
                </Grid>
                <Grid item >
                    {
                        forecastItemList && <Forecast forecastItemList={forecastItemList} />
                    }
                </Grid>
            </Grid>
        </AppFrame>
    )
}



export default CityPage
