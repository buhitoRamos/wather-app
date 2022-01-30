import {  useEffect } from 'react'
import axios from 'axios'
import getCharData from '../utils/transforms/getChartData'
import getUrls from '../utils/urls'
import getForecastItemList from '../utils/transforms/getForecastItemList'
import { useParams } from 'react-router-dom'
import { getCityCode } from '../utils/utils'

const useCityPage = ( allForecastItemList, allChartData, actions) => {
    const { city, countryCode } = useParams()
    const cityCode =  getCityCode(city, countryCode)
    useEffect(() => {
        const getForecast = async () => {
            const url = getUrls("forecast", city, countryCode)

            try {
                const { data } = await axios.get(url)
                const dataAux = getCharData(data)
                actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })
                const forecastItemListAux = getForecastItemList(data)
                actions({ type: 'SET_FORECAST_ITEM_LIST', payload:{ [cityCode]: forecastItemListAux } })
            } catch (error) {
                console.log(error)
            }

        }

        if(allForecastItemList && allChartData && !allForecastItemList[cityCode] && !allChartData[cityCode]) {
             getForecast()
        }
       
    }, [allChartData, allForecastItemList, city, cityCode, countryCode, actions])
    return { city, countryCode }
}
export default useCityPage