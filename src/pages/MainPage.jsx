import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'

// temporal
const cities = [
    {city: "Buenos Aires", country: "Argentina"},
    {city: ' Barcelona', country: 'España'}
]

const MainPage = props => {
    const history = useHistory()
    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <div>
            <h2> Lista de cuidades </h2>
           <CityList cities={cities}
           onClickCity={onClickHandler}/>
        </div>
    )
}

export default MainPage
