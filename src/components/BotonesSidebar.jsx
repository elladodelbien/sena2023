import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";


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
const Container = styled.div`
font-size:${(props) => props.fontSize};
  background: ${(props) => props.backgroundcolor};
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  margin: 2px;
  transition: all 1s;
  height: 80px;
  button {
    padding: 10px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #99d83bd1;
    border: none;

  }
  &:hover {
    background: ${(props) => brightenColor(props.backgroundcolor)};
    cursor: pointer;
  }
  a {
    text-transform:uppercase;
  }


`;

const BotonesSidebar = ({ link, enlace, size,fontSize, backgroundcolor,text,textLink }) => {
  return (
    <Container      
      backgroundcolor={backgroundcolor}
      fontSize={fontSize}
    >
      <div  >
        <p className="parrafo-img">{text}</p>
        <Link  to={link}>{textLink}</Link>
      </div>
    </Container>
  );
};

export default BotonesSidebar;
