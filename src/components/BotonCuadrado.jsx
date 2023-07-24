import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Formulario from "./Formulario";

const Container = styled.div`
  font-size: 20px;

  background: ${(props) => props.backgroundcolor};
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  margin: 2px;
  transition: background-color 0.3s;
  height: 80px;
  .btnEnlace {
    padding: 10px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #99d83bd1;
    border: none;
    margin: 5px;
    cursor: pointer;
  }
  button:hover {
    background: #42db39;
    transition: 0.3s;
  }
  .parrafo-img {
    font-size: 12px;
  }
`;
const BotonCuadrado = ({  text,CalcularCuadrado,  link,weightC, setWeightC,perimetroCuadrado, setHeightC,heightC, backgroundcolor,  enlace,  funcionb,  funcionh,  calculo,  texto,}) => {
  const hovercolor = backgroundcolor ? brightenColor(backgroundcolor) : null;
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
 
  const labelLado = true
  const cerrarRectangulo = () => {
    setMostrarFormulario(false);
  };

  const toggleFormulario = () => {

    setMostrarFormulario(!mostrarFormulario);
  };



    
   


    




    
 



// ////////////////////////////////////////////////////////////////////////

  const handleHeightCuadrado = (event) => {
    const value = event.target.value;
    setHeightC(value);
  };
  const handleWeightCuadrado = (event) => {
    const value = event.target.value;
    setWeightC(value);
  };

  return (
    <Container backgroundcolor={backgroundcolor} hovercolor={hovercolor}>
      <div>
        <p className="parrafo-img">Cuadrado</p>
        {/* <Link to={link}>{enlace}</Link> */}
      </div>
      <div className="btn">
        <button className="btnEnlace" onClick={toggleFormulario}>
          Calcular
        </button>

        {mostrarFormulario && (
          <Formulario
            titulo={"Cuadrado"}
            cerrar={cerrarRectangulo}
            figuraGeometrica={"CALCULAR"}
            wid={"300px"}
            heig={"350px"}
            funcionh={handleHeightCuadrado}
            funcionb={handleWeightCuadrado}
            calculo={CalcularCuadrado}
            labelLado={labelLado}
          />
        )}
      </div>
    </Container>
  );
};

// Función para obtener un color más brillante
const brightenColor = (color) => {
  // Obtener componentes RGB
  const r = parseInt(color.substr(1, 2), 16);
  const g = parseInt(color.substr(3, 2), 16);
  const b = parseInt(color.substr(5, 2), 16);

  // Aplicar brillo aumentando los componentes RGB
  const brightenedR = Math.min(r + 20, 255);
  const brightenedG = Math.min(g + 20, 255);
  const brightenedB = Math.min(b + 20, 255);

  // Convertir componentes RGB de nuevo a formato hexadecimal
  const brightenedColor =
    "#" +
    brightenedR.toString(16).padStart(2, "0") +
    brightenedG.toString(16).padStart(2, "0") +
    brightenedB.toString(16).padStart(2, "0");

  return brightenedColor;
};

export default BotonCuadrado;
