import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../assets/lottie.json";
import styled from "styled-components";
import Inputts from "./Formulario";

const Container = styled.div`
  h1 {
    font-size: 12px;
    text-align: center;
    padding-top: 2px;
    padding-bottom: 0;
    font-weight: bold;
    margin: 12px;
  }
  .App-lottie {
    // Estilos para el contenedor principal
  }

 

  .container {
    // Estilos para el contenedor de la animación
    display: flex;
    align-items: flex-start;
  }
`;

const Lottieimg = ({ funcionH, calculo, funcionW, wid, heig }) => {
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
      <h1>Vamos a Calcular las areas de tus figuras</h1>
      <div className="App-lottie">
        <div className="container" ref={container}></div>
      </div>
      {/* <Inputts funciones={funcionH}  wid={wid} heig={heig}  calculo={calculo} /> */}
    </Container>
  );
};

export default Lottieimg;
