import usePoems from "../hooks/usePoems";
import { useRef } from "react";
import { toPng } from "html-to-image";

const Resultado = () => {
  const { resultado, handleResetApp } = usePoems();
  const { remitente, description, destinatario } = resultado;

  const elementRef = useRef(null);

  const htmlToImageConvert = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Hobipalooza";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="contenedor-poema">
      <div className="poem" ref={elementRef}>
        <div className="titulo">From: {remitente}</div>
        <div className="titulo">To: {destinatario}</div>
        <div className="description">Dear: {description}</div>
      </div>
      <button onClick={htmlToImageConvert}>Download and share</button>
      <button onClick={handleResetApp}>Write another poem</button>
    </div>
  );
};

export default Resultado;
