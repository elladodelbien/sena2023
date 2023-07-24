

import styled from "styled-components";

const InputContainer = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-right: 10px;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  color: black;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  text-transform: uppercase;
  background-color: #5fc550;
  color: #f4f4f4;
  border: none;

  &.red {
    background-color: #ff0000;
    margin-top: 4px;

    &:hover {
      background-color: #fc4025;
    }
  }
`;

const FormContainer = styled.div`
  background-color: #f8f8f8;
  width: ${(props) => props.wid};
  height: ${(props) => props.heig};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 295px;
  left:500px;
  @media (max-width: 768px) {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);
  }
  h1 {
    color:#0c0c0c;
  }
  

  z-index: 9999;
  
  
  
}




  
`;

const Formulario = ({ funcionb, CalcularTriangulo, labelLado,funcionh,catetoCoseno,  handleHipotenusa,handleHeightTChange, handleWidthTChange , hipotenusa,catetoOpuesto, cerrar,  funcionl, titulo, calculo,  width,  wid,  heig,  figuraGeometrica}) => {
     
  

  return (
    <FormContainer wid={wid} heig={heig}>
      <h1>{titulo}</h1>
      <InputContainer>
        <Label>{catetoCoseno ? "Cateto Adyacente" : "Base"} </Label>
        <Input onChange={funcionb} value={width} type="text" name="base" />
      </InputContainer>
      <InputContainer>
        <Label>Altura:</Label>
        <Input onChange={funcionh} type="number" name="altura" />
      </InputContainer>
      <InputContainer id={labelLado ? "labelLado" : ""}>
        <Label>{hipotenusa ? "Hipotenusa" : "Lado:" }</Label>
        <Input onChange={handleHipotenusa} type="number" name="lado" />
      </InputContainer>
     
        <Button  onClick={calculo} type="submit">
          {figuraGeometrica}
        </Button>
      

      <Button className="red" onClick={cerrar} type="submit">
        cerrar
      </Button>
    </FormContainer>
  );
};

export default Formulario;
