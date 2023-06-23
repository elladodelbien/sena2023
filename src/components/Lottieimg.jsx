import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/lottie.json";
import styled from "styled-components";
import Inputts from "./Inputts";


const Container = styled.div`
h1 {
  font-size: 12px;
  text-align: center;
  padding-top: 2px;
  padding-bottom: 0;
  font-weight: bold;
  margin:12px;

}
  .App-lottie {
    // Estilos para el contenedor principal
  }

  .input {
    // Estilos para el contenedor del input
  }

  .container {
    // Estilos para el contenedor de la animación
  }
`;







const Lottieimg = ({funcionH,calculo,funcionW}) => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <Container>
    <div className="App-lottie">
      <h1>Vamos a Calcular las areas de tus figuras</h1>
      <div className="input">
        <Inputts 
        funciones={funcionH}
        calculo={calculo}     
        />
        <Inputts 
        funciones={funcionW}
        calculo={calculo}     
        />
      </div>
      <div className="container" ref={container}></div>
    </div>
    </Container>
  );
};

export default Lottieimg;
