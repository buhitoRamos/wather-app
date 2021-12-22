import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'

const WelcomeScreen = ({children}) => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    console.log("myRefDiv.current", myRefDiv.current)

    useEffect(() => {
// entra por aca una ves que ya se renderizo, componentDidMount / componentDidUpdate
        if (!vanta) {
            setVanta(1)
            Clouds({
                THREE,
                el: myRefDiv.current
            }) 
        }
        return () => {
            // libera la memoria  cuando se cierra el componente
            if (vanta) {
                setVanta(null)
            }
        }

    }, [vanta]) // =>son las veces que se va a volver a renderizar 
    return (
        <div className="full" ref={myRefDiv}>
           {children}
        </div>
    )
}

WelcomeScreen.propTypes = {
    children: PropTypes.node,
}

export default WelcomeScreen
