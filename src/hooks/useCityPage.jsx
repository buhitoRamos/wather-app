import { useState, useEffect } from 'react'
import axios from 'axios'
import getCharData from '../utils/transforms/getChartData'
import getUrls from '../utils/urls'
import getForecastItemList from '../utils/transforms/getForecastItemList'

const useCityPage = (city, countryCode) => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)
    useEffect(() => {
        const getForecast = async () => {
            const url = getUrls("forecast", city, countryCode)
            try {
                const { data } = await axios.get(url)
                const dataAux = getCharData(data)
                setChartData(dataAux)
                const forecastItemListAux = getForecastItemList(data)
                setForecastItemList(forecastItemListAux)
            } catch (error) {
                console.log(error)
            }

        }

        getForecast()
    }, [city, countryCode])
    return { city, chartData, forecastItemList }
}
export default useCityPage