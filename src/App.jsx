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
    const [allChartData, setAllChartData]= useState({})
    const [allForecastItemList, setAllForecastItemList] = useState({})

    const onSetChartData = useCallback( (chartDataCity)=> {
        setAllChartData(chartData => ({...chartData, ...chartDataCity}) )
    }, [setAllChartData])

    const onSetForecastItemList = useCallback( (forecastCity)=> {
        setAllForecastItemList(forecast => ( {...forecast, ...forecastCity}) )

    },[setAllForecastItemList])


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
            allForecastItemList,
            allChartData
        }
    ), [allWeather,  allChartData, allForecastItemList])

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

