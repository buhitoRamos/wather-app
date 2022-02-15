import React, { useReducer, useContext } from 'react'

const WeatherStateContext = React.createContext()
const WeatherDispatchContext = React.createContext()



const initialValue = {
    allWeather: {},
    allForecastItemList: {},
    allChartData: {}
}
const reducer = (state, actions) => {
    switch (actions.type) {
        case 'SET_ALL_WEATHER':
            const weatherCity = actions.payload 
            const newAllWeather = {...state.allWeather, ...weatherCity}
            return {...state, allWeather: newAllWeather}

        case 'SET_FORECAST_ITEM_LIST':
            const forecastItemList = actions.payload
            const newForecastItemList = {...state.forecastItemList, ...forecastItemList}
            return {...state, allForecastItemList: newForecastItemList}
        case 'SET_CHART_DATA':
            const chartData = actions.payload
            const newChartData = { ...state.setAllChartData, ...chartData}
            return {...state, allChartData: newChartData}
            default:
                return state
    }
}

const WeatherContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialValue)
    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}
const useWeatherStateContext = () => {
    const state = useContext(WeatherStateContext)
    if(!state) {
        throw Error ('Must set state provider')
    }
    return state
}
const useWeatherDispatchContext = () => {
    const dispatch = useContext(WeatherDispatchContext)
    if(!dispatch) {
        throw Error ('Must set dispatch provider')
    }
    return dispatch
}

export {
    WeatherContext,
    useWeatherDispatchContext,
    useWeatherStateContext
}