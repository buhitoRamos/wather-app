import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from '../components/Appframe'
import { Paper } from '@material-ui/core'

// temporal
const cities = [
    { city: "Buenos Aires", country: "Argentina" },
    { city: ' Barcelona', country: 'España' }
]

const MainPage = () => {
    const history = useHistory()
    const onClickHandler = () => {
        history.push("/city")
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={cities}
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
