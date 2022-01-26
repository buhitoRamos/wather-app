import {  useEffect } from 'react'
import axios from 'axios'
import getCharData from '../utils/transforms/getChartData'
import getUrls from '../utils/urls'
import getForecastItemList from '../utils/transforms/getForecastItemList'
import { useParams } from 'react-router-dom'
import { getCityCode } from '../utils/utils'

const useCityPage = (onSetChartData, onSetForecastItemList, allForecastItemList, allChartData) => {
    const { city, countryCode } = useParams()
    const cityCode =  getCityCode(city, countryCode)
    useEffect(() => {
        const getForecast = async () => {
            const url = getUrls("forecast", city, countryCode)

            try {
                const { data } = await axios.get(url)
                const dataAux = getCharData(data)
                onSetChartData( { [cityCode]: dataAux } )
                const forecastItemListAux = getForecastItemList(data)
                onSetForecastItemList({ [cityCode]: forecastItemListAux } )
            } catch (error) {
                console.log(error)
            }

        }

        if(allForecastItemList && allChartData && !allForecastItemList[cityCode] && !allChartData[cityCode]) {
             getForecast()
        }
       
    }, [allChartData, allForecastItemList, city, cityCode, countryCode, onSetChartData, onSetForecastItemList])
    return { city, countryCode }
}
export default useCityPage