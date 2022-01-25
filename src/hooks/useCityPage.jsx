import {  useEffect } from 'react'
import axios from 'axios'
import getCharData from '../utils/transforms/getChartData'
import getUrls from '../utils/urls'
import getForecastItemList from '../utils/transforms/getForecastItemList'
import { useParams } from 'react-router-dom'


const useCityPage = (onSetChartData, onSetForecastItemList) => {
    const { city, countryCode } = useParams()
    useEffect(() => {
        const getForecast = async () => {
            const url = getUrls("forecast", city, countryCode)
            try {
                const { data } = await axios.get(url)
                const dataAux = getCharData(data)
                onSetChartData(dataAux)
                const forecastItemListAux = getForecastItemList(data)
                onSetForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }

        }

        getForecast()
    }, [city, countryCode, onSetChartData, onSetForecastItemList])
    return { city, countryCode }
}
export default useCityPage