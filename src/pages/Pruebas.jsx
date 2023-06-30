
import styled from 'styled-components';

import Carousel from '../components/Carousel';
import BotonesFiguras2 from './BotonesFiguras2';
import imagenRectangulo from "../assets/rect.png"
import imagenCuadrado from "../assets/sena.png"
import  imagenTriangulo from "../assets/tr.png"




const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Column = styled.div`
  background-color: rgb(50 63 148 / 90%);
  padding: 20px;
`;

const Pruebas = () => {
    const imagess = [
        imagenRectangulo,
        imagenCuadrado,
        imagenTriangulo
      ];
  return (
    <Wrapper>
    <Carousel 
    images= {imagess}
    >
        <BotonesFiguras2/>
    </Carousel>
      <Column >
       
      </Column>
    </Wrapper>
  );
};

export default Pruebas;
