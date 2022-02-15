import React from 'react'
import WelcomePage from './pages/WelcomePage'
import MainPage from './pages/MainPage'
import CityPage from './pages/CityPage'
import NotFoundPage from './pages/NotFoundPage'
import { WeatherContext } from './WeatherContext'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'



const App = () => {
    return (
        <WeatherContext>
            <Router>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="/main*" element={<MainPage/>}/>       
                    <Route path="/city/:countryCode/:city*" element={<CityPage/>}/>
                    <Route path='*' element={<NotFoundPage/>}/>
                </Routes>
            </Router>
        </WeatherContext>

    )
}



export default App

