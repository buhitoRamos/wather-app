import React, {useReducer} from 'react'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'



const App = () => {
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
    const [state, dispatch]= useReducer(reducer, initialValue)
   

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={state} actions={dispatch} />
                </Route>
                <Route path="/city/:countryCode/:city"
                >
                    <CityPage data={state} actions={dispatch}/>
                </Route>
                <Route >
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}



export default App

