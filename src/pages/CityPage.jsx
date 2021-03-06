import React, { useMemo } from 'react'
import { Grid, LinearProgress } from '@material-ui/core'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetail from '../components/WeatherDetail'
import ForecastChart from '../components/ForecastChart'
import Forecast from '../components/Forecast'
import AppFrame from '../components/Appframe/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/getCities'

const CityPage = ({data, actions}) => {
    const { onSetAllWeather, onSetChartData, onSetForecastItemList} =  actions
    const {allWeather, allForecastItemList, allChartData}= data
    
    
   const {city, countryCode} =  useCityPage( onSetChartData, onSetForecastItemList, allForecastItemList, allChartData)
    const cities = useMemo(()=> ( [{city, countryCode}] ), [city, countryCode] )
    useCityList(cities, allWeather, onSetAllWeather)

    const cityCode=[getCityCode(city, countryCode)]
    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const state = weather && weather.state
    const temperature = weather && weather.temperature
    const country = getCountryNameByCountryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind

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
                    {
                        humidity && wind &&
                        <WeatherDetail humidity={humidity} wind={wind} />
                    }
                </Grid>
                <Grid item >
                    {
                        !chartData && !forecastItemList && <LinearProgress />
                    }
                </Grid>
                <Grid item >
                    {
                        chartData && <ForecastChart data={chartData} />
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
