import { useState, createContext } from "react";

const PoemContext = createContext()

const PoemProvider =  ({children}) => {


    const [generar, setGenerar] = useState({
        ciudad: "",
        ciudad1: "",
        pais: ""
    })

    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState({})

    const datosGenerar = e => {
        setGenerar({
            ...generar,
            [e.target.name]: e.target.value
        })
    }

    const generarPoema = datos => {
        setCargando(true)
        try {
            const { ciudad, ciudad1, pais} = datos
         setResultado(datos)
         setCargando(false)
        } catch (error) {
         console.log(error)
        } 
    }
    return (
        <PoemContext.Provider
         value={{
            generar,
            datosGenerar,
            generarPoema,
            resultado,
            cargando
         }}
        >
            {children}
        </PoemContext.Provider>
    )
}

export {
    PoemProvider
}
export default PoemContext