import { useState, createContext } from "react";

const PoemContext = createContext()

const PoemProvider =  ({children}) => {


    const [generar, setGenerar] = useState({
        remitente: "",
        description: "",
        destinatario: ""
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
            const { remitente, description, destinatario} = datos
         setResultado(datos)
         setCargando(false)
        } catch (error) {
         console.log(error)
        } 
    }

    const handleResetApp = () => {
        const reset = confirm ("Do you want to write another  poem?")
        if (reset) {
            setCargando(true),
            setGenerar({remitente:"",description:"" ,destinatario:""})
        }
    }

    return (
        <PoemContext.Provider
         value={{
            generar,
            datosGenerar,
            generarPoema,
            resultado,
            cargando,
            handleResetApp
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