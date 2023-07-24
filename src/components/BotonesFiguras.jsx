import { styled } from "styled-components";
import BotonesEnlace from "./BotonesEnlace";
import imagenCuadrado from "../assets/area-de-un-cuadrado-formula-2.png";
import imagenTriangulo from "../assets/tr.png";
import imagenRectangulo from "../assets/rect.png";
import BotonTriangulo from "./BotonTriangulo";
import BotonCuadrado from "./BotonCuadrado";




const Container = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
 margin:10px;
  border-radius: 12px;
  @media (max-width: 768px) {
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(127px, 1fr));/* Divide el contenedor en tres columnas de igual ancho */
    width: 80vw;
    padding:20px;
    justify-content: center;
  }
  @media (max-width: 395px) {
    height: auto;
    grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));/* Divide el contenedor en tres columnas de igual ancho */
    width: 80vw;
    padding:20px;
    justify-content: center;
  }


  grid-gap: 10px;
  height: auto;
  background-color: #575a6d80;
  grid-auto-flow: row;
  .cuadrado {
    padding: 7px;
    display: flex;
    flex-direction: column;
    
    .img-rectangulo {
   
    }


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

const BotonesFiguras = ({  calculo,CalcularTriangulo, CalcularCuadrado,weightC, setWeightC, setHeightC,heightC, width, handleHipotenusa, handleHeightTChange,handleWidthTChange,  texto, toggleFormulario, funcionh,  funcionb}) => {
    const text1 = "rectangulo"
    const text3 = "Cuadrado"
    const text2 = "triangulo"

  return (
    <Container>
      <div className="cuadrado">
        <div className="img-rectangulo">
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
        <BotonCuadrado
        heightC={heightC} 
        setHeightC={setHeightC}
        weightC={weightC} 
        setWeightC={setWeightC}
        CalcularCuadrado={CalcularCuadrado}
        
        />
      </div>
      <div className="cuadrado">
       
        <div>
          <img src={imagenTriangulo} width={80} height={80} alt="" srcSet="" />
          <BotonTriangulo
          handleHeightTChange={handleHeightTChange}
          handleWidthTChange={handleWidthTChange}
          handleHipotenusa={handleHipotenusa}
          CalcularTriangulo={CalcularTriangulo}
          
          />
        </div>
        
      </div>
    </Container>
  );
};

export default BotonesFiguras;
{imagenCuadrado} 
