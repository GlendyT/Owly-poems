import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Loading from "./Loading"
import usePoems from "../hooks/usePoems"

const Poems = () => {

    const { resultado, cargando} = usePoems()
  return (
    <>
    <main className="dos-columnas">
        <Formulario/>

        { cargando ?  <Loading /> :  
        
        resultado?.ciudad && <Resultado/>}
    </main>
        
    </>
  )
}

export default Poems