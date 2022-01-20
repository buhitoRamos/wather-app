import { useEffect, useState, useRef } from "react"
import Clouds from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'


const useVanta = () => {
    const myRefDiv = useRef(null)
    const [vanta, setVanta] = useState(0)
    useEffect(() => {
        if (!vanta) {
            setVanta(1)
            Clouds({
                THREE,
                el: myRefDiv.current
            })
        }
        return () => {
            if (vanta) {
                setVanta(null)
            }
        }

    }, [vanta])
    return myRefDiv
}

export default useVanta