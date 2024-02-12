import { useState } from "react"
import usePoems from "../hooks/usePoems"


const Formulario = () => {

    const [alerta, setAlerta] = useState("")

    const {generar, datosGenerar, generarPoema} = usePoems()
    const { ciudad, ciudad1, pais} = generar

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(generar).includes('')) {
            setAlerta("Todos los campos son obligatorios.");
            return
        }
        generarPoema(generar)
    }



  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form
         onSubmit={handleSubmit}
        >
            <div className="campo">
                <label htmlFor="ciudad">From: </label>
                <input
                 type="text"
                 id="ciudad"
                 name="ciudad"
                 onChange={datosGenerar}
                 value={ciudad}
                />
            </div>

            <div className="campo">
                <label htmlFor="ciudad1">Write your Poem</label>
                <textarea
                 id="ciudad1"
                 name="ciudad1"
                 onChange={datosGenerar}
                 value={ciudad1}
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">Dedicated to..</label>
                <select 
                 id="pais"
                 name="pais"
                 onChange={datosGenerar}
                 value={pais}
                >
                    <option value="">Choose</option>
                    <option value="BTS">BTS</option>
                </select>
            </div>

            <input
             type="submit"
             value="Genrate Poem"
            />
        </form>

    </div>
  )
}

export default Formulario