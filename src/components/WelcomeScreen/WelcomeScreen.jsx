import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    console.log("myRefDiv.current", myRefDiv.current)
    // primera renderizacion es nulo porque es lo que defino

    useEffect(() => {
        console.log("myRefDiv.current (en useEfect)", myRefDiv.current)
        if(!vanta) {
            setVanta(1)
            console.log("cambio vanta a 1")
        }

    })
    return (
        <div ref={myRefDiv}>
            Welcome
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
