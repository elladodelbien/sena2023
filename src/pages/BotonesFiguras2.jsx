import React, { useState } from "react";
import styled from "styled-components";
import imagenRectangulo from "../assets/rect.png"
import imagenCuadrado from "../assets/sena.png"
import  imagenTriangulo from "../assets/tr.png"
import BotonesEnlace from "../components/BotonesEnlace";
import BotonRectangulo from "../components/BotonRectangulo";
import BotonTriangulo from "../components/BotonTriangulo";
import Carousel from "../components/Carousel";





const BotonesFiguras2 = ({ calculo, width, texto, toggleFormulario, funcionh, funcionb }) => {

  
  const images = [
    imagenRectangulo,
    imagenCuadrado,
    imagenTriangulo
  ];

  const [showCarousel, setShowCarousel] = useState(false);

  const toggleCarousel = () => {
    setShowCarousel(!showCarousel);
  };

  return (
    <Container>
      <div className="cuadrado">
        <div className="img-rectangulo">
          {showCarousel && <Carousel images={images} />}
          <img src={imagenRectangulo} alt="" srcSet="" />
        </div>
        <BotonesEnlace
          text="rectangulo"
          texto={texto}
          size="30px"
          backgroundColor=""
          calcs={toggleFormulario}
          funcionb={funcionb}
          calculo={calculo}
          funcionh={funcionh}
          toggleCarousel={toggleCarousel}
        />
      </div>
      <div className="cuadrado">
        <div>
          {showCarousel && <Carousel images={images} />}
          <img src={imagenCuadrado} alt="" srcSet="" />
        </div>
        <BotonRectangulo />
      </div>
      <div className="cuadrado">
        <div>
          {showCarousel && <Carousel images={images} />}
          <img src={imagenTriangulo} width={80} height={80} alt="" srcSet="" />
          <BotonTriangulo />
        </div>
      </div>
    </Container>
  );
};

export default BotonesFiguras2;
