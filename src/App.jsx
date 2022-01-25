import React, {useState, useCallback, useMemo} from 'react'
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
    const [allWeather, setAllWeather] = useState({})
    const [chartData, onSetChartData]= useState(null)
    const [forecastItemList, onSetForecastItemList] = useState(null)


    const onSetAllWeather = useCallback((WeatherCity)=> {
        setAllWeather(allWeather => {
            return ({...allWeather, ...WeatherCity})
        })
    }, [setAllWeather])

    const actions = useMemo(()=> (
        {
            onSetAllWeather,
            onSetForecastItemList,
            onSetChartData
        }
    ), [onSetAllWeather, onSetChartData, onSetForecastItemList])
    
    const data =  useMemo(()=> (
        {
            allWeather,
            forecastItemList,
            chartData
        }
    ), [allWeather,  chartData, forecastItemList])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <WelcomePage />
                </Route>
                <Route path="/main">
                    <MainPage data={data} actions={actions} />
                </Route>
                <Route path="/city/:countryCode/:city"
                >
                    <CityPage data={data} actions={actions}/>
                </Route>
                <Route >
                    <NotFoundPage />
                </Route>
            </Switch>
        </Router>
    )
}



export default App

