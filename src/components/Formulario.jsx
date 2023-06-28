// import { styled } from "styled-components";
// const Inputts = ({funciones,calculo,labbel}) => {
//   return (
//     <div>
//       <InputContainer>
//         <Label>{labbel}</Label>
//         <Input onChange={funciones}/>
//       </InputContainer>
//       <button onClick={calculo}></button>
//     </div>
//   );
// };
// const InputContainer = styled.div`
//   margin-bottom: 10px;
//   display:flex;
//   flex-direction:column;

// `;

// const Label = styled.label`
//   margin-right: 10px;
// `;

// const Input = styled.input`
//   width: 200px;
//   height: 30px;
//   color:black;
// `;

// // export default Inputts;
// import React from 'react';
// import styled from 'styled-components';

// const StyledForm = styled.form`
//   background-color: #f8f8f8;
//   width: ${props => props.tamano};
//   padding: 20px;
//   border-radius: 5px;
// `;

// const StyledLabel = styled.label`
//   display: block;
//   margin-bottom: 10px;
// `;

// const StyledInput = styled.input`
//   padding: 10px;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   width: 100%;
//   box-sizing: border-box;
//   margin-bottom: 10px;
// `;

// const StyledButton = styled.button`
//   padding: 10px;
//   border-radius: 4px;
//   text-transform: uppercase;
//   background-color: #5fc550;
//   color: #fff;
//   border: none;
//   cursor: pointer;
// `;

// const Formulario = ({ color, tamano }) => {
//   return (
//     <StyledForm color={color} tamano={tamano}>
//       <StyledLabel>
//         Base:
//         <StyledInput type="text" name="base" />
//       </StyledLabel>
//       <StyledLabel>
//         Altura:
//         <StyledInput type="text" name="altura" />
//       </StyledLabel>
//       <StyledLabel>
//         Lado:
//         <StyledInput type="text" name="lado" />
//       </StyledLabel>
//       <StyledButton type="submit">Registrar</StyledButton>
//     </StyledForm>
//   );
// };

// export default Formulario;
import React from "react";
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

const Formulario = ({  funcionb,  funcionh,  cerrar,  funcionl, titulo, calculo,  width,  wid,  heig,  figuraGeometrica}) => {
  return (
    <FormContainer wid={wid} heig={heig}>
      <h1>{titulo}</h1>
      <InputContainer>
        <Label>Base:</Label>
        <Input onChange={funcionb} value={width} type="text" name="base" />
      </InputContainer>
      <InputContainer>
        <Label>Altura:</Label>
        <Input onChange={funcionh} type="text" name="altura" />
      </InputContainer>
      <InputContainer>
        <Label>Lado:</Label>
        <Input onChange={funcionl} type="text" name="lado" />
      </InputContainer>
     
        <Button onClick={calculo} type="submit">
          {figuraGeometrica}
        </Button>
      

      <Button className="red" onClick={cerrar} type="submit">
        cerrar
      </Button>
    </FormContainer>
  );
};

export default Formulario;
