import { useState } from "react"
import usePoems from "../hooks/usePoems"


const Formulario = () => {

    const [alerta, setAlerta] = useState("")

    const {generar, datosGenerar, generarPoema} = usePoems()
    const { remitente, description, destinatario} = generar

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(generar).includes('')) {
            setAlerta("All spaces must be filled out");
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
                <label htmlFor="remitente">From: </label>
                <input
                 type="text"
                 id="remitente"
                 name="remitente"
                 onChange={datosGenerar}
                 value={remitente}
                />
            </div>

            <div className="campo">
                <label htmlFor="description">Write your Poem or Pick-up line</label>
                <textarea
                maxLength={200}
                placeholder="Maximum 200 characters..."
                rows={5}
                 id="description"
                 name="description"
                 onChange={datosGenerar}
                 value={description}
                />
            </div>

            <div className="campo">
                <label htmlFor="destinatario">Dedicated to..</label>
                <select 
                 id="destinatario"
                 name="destinatario"
                 onChange={datosGenerar}
                 value={destinatario}
                >
                    <option value="">Choose</option>
                    <option value="BTS">BTS</option>
                    <option value="Kim Namjoon">Kim Namjoon</option>
                    <option value="Kim Seokjin">Kim Seokjin</option>
                    <option value="Min Yoongi">Min Yoongi</option>
                    <option value="Jung Hoseok">Jung Hoseok</option>
                    <option value="Park Jimin">Park Jimin</option>
                    <option value="Kim Taehyung">Kim Taehyung</option>
                    <option value="Jeon Jungkook">Jeon Jungkook</option>
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