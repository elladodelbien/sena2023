
import styled from "styled-components";

const Container = styled.div`
  font-size: ${(props) => props.size};
  background-color: ${(props) => props.backgroundColor};
  padding: 10px;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  margin: 2px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

const BotonesEnlace = ({ text, link, size, backgroundColor }) => {
  return (
    <Container
      size={size}
      backgroundColor={backgroundColor}
      hoverColor={brightenColor(backgroundColor)}
    >
      <p>{text}</p>
      <a href={link}>Enlace</a>
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

export default BotonesEnlace;
