import { styled } from "styled-components";
import BotonesEnlace from "./BotonesEnlace";
import imagenCuadrado from "../assets/area-de-un-cuadrado-formula-2.png";
import imagenTriangulo from "../assets/tr.png";
import imagenRectangulo from "../assets/rect.png";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Divide el contenedor en tres columnas de igual ancho */
  grid-gap: 10px;
  height: auto;
  margin: 10px;

  .cuadrado {
    background-color: #e0e0e0;
    padding: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

const BotonesFiguras = ({ calcs }) => {
  return (
    <Container>
      <div className="cuadrado">
        <div>
          <img src={imagenRectangulo} alt="" srcSet="" />
        </div>
        <BotonesEnlace calcs={calcs} size="30px" backgroundColor="#9747FF" />
      </div>
      <div className="cuadrado">
        <div>
          <img src={imagenTriangulo} alt="" srcSet="" />
        </div>
        <BotonesEnlace calcs={calcs} size="30px" backgroundColor="#9747FF" />
      </div>
      <div className="cuadrado">
        <div>
          <img src={imagenCuadrado} width={80} height={80} alt="" srcSet="" />
        </div>
        <BotonesEnlace calcs={calcs} size="30px" backgroundColor="#9747FF" />
      </div>
    </Container>
  );
};

export default BotonesFiguras;
