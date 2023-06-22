import React from "react";
import { styled } from "styled-components";
import BotonesEnlace from "./BotonesEnlace";
import imagenCuadrado from "../assets/area-de-un-cuadrado-formula-2.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Divide el contenedor en tres columnas de igual ancho */
  grid-gap: 10px;
  height: 80px;
  margin: 10px;

  .cuadrado {
    background-color: #e0e0e0;
    padding: 7px;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
  }
`;

const BotonesFiguras = () => {
  return (
    <Container>
      <div className="cuadrado">
        <BotonesEnlace size="30px" backgroundColor="#9747FF" />
      </div>
      <div className="cuadrado">
        <BotonesEnlace size="30px" backgroundColor="#9747FF" />
      </div>
      <div className="cuadrado">
        <img src={imagenCuadrado} width={80} height={80} alt="" srcset="" />
        <BotonesEnlace size="30px" backgroundColor="#9747FF" />
      </div>
    </Container>
  );
};

export default BotonesFiguras;
