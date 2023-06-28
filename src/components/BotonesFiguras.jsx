import { styled } from "styled-components";
import BotonesEnlace from "./BotonesEnlace";
import imagenCuadrado from "../assets/area-de-un-cuadrado-formula-2.png";
import imagenTriangulo from "../assets/tr.png";
import imagenRectangulo from "../assets/rect.png";
import BotonTriangulo from "./BotonTriangulo";
import BotonRectangulo from "./BotonRectangulo";




const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* Divide el contenedor en tres columnas de igual ancho */
  grid-gap: 10px;
  height: auto;
  margin: 10px;
  background-color: #575a6d80;

  .cuadrado {
    padding: 7px;
    display: flex;
    flex-direction: column;

    justify-content: center;
    img {
      width: 100%;
      @media (max-width: 768px) {
        height: auto;
      }
      height: 100px;
    }
  }
`;

const BotonesFiguras = ({  calculo,   width,  texto, toggleFormulario, funcionh,  funcionb}) => {
    const text1 = "rectangulo"
    const text3 = "Cuadrado"
    const text2 = "triangulo"

  return (
    <Container>
      <div className="cuadrado">
        <div>
          <img src={imagenRectangulo} alt="" srcSet="" />
        </div>
        <BotonesEnlace
          text={text1}
          texto={texto}
          size="30px"
          backgroundColor=""
          calcs={toggleFormulario}
          funcionb={funcionb}
          calculo={calculo}
          funcionh={funcionh}

          
        />
      </div>
      <div className="cuadrado">
        <div>
          <img src={imagenCuadrado}  alt="" srcSet="" />
        </div>
        <BotonRectangulo/>
      </div>
      <div className="cuadrado">
       
        <div>
          <img src={imagenTriangulo} width={80} height={80} alt="" srcSet="" />
          <BotonTriangulo/>
        </div>
        
      </div>
    </Container>
  );
};

export default BotonesFiguras;
{imagenCuadrado} 
