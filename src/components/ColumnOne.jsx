
import styled from 'styled-components';
import  { useState } from "react";

const ColumnOne = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleWidthChange = (event) => {
    const value = event.target.value;
    setWidth(value);
  };

  const handleHeightChange = (event) => {
    const value = event.target.value;
    setHeight(value);
  };

  const calculateArea = () => {
    const area = width * height;
    localStorage.setItem('rectangleArea', area);
  };

  return (
    <Container>
      <Title>Título</Title>
      <InputContainer>
        <Label>Ancho:</Label>
        <Input
          type="number"
          value={width}
          onChange={handleWidthChange}
        />
      </InputContainer>
      <InputContainer>
        <Label>Altura:</Label>
        <Input
          type="number"
          value={height}
          onChange={handleHeightChange}
        />
      </InputContainer>
      <button onClick={calculateArea}>Calcular Área</button>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  background-color: ${(props) => props.theme.bg1};
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
`;


export default ColumnOne;
