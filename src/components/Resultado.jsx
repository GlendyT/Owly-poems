import usePoems from "../hooks/usePoems"

const Resultado = () => {

    const { resultado } = usePoems()

    const {ciudad, ciudad1, pais} =  resultado
  return (
    <div className="contenedor clima">
        <h2>From: {ciudad}</h2>
        <h2>Dear: {ciudad1}</h2>
        <h2>To: {pais}</h2>

    </div>
  )
}

export default Resultado