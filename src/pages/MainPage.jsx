import React from 'react'
import { useHistory } from 'react-router-dom'
import CityList from './../components/CityList'
import AppFrame from '../components/Appframe'
import { Paper } from '@material-ui/core'
import { getCities } from '../utils/getCities'



const MainPage = ( {data, actions} )=> {
    const history = useHistory()
    const onClickHandler = (city, countryCode) => {
      
         history.push(`/city/${countryCode}/${city}`)
    }

    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList cities={getCities()}
                actions={actions}
                data={data}
                onClickCity={onClickHandler} />
            </Paper>
        </AppFrame>
    )
}

export default MainPage
