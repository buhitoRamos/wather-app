import React from 'react'
import { useNavigate } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from '../components/Appframe'
import { Paper } from '@material-ui/core'
import { getCities } from '../utils/getCities'



const MainPage = ()=> {
    const navigate = useNavigate()
    const onClickHandler = React.useCallback((city, countryCode) => {
      
         navigate(`/city/${countryCode}/${city}`)
    }, [navigate])

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={getCities()}
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
