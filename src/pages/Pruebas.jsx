import styled from "styled-components";
import FormularioVectores from "../components/FormularioVectores";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
  .containerColumn1 {
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const FormularioWrapper2 = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  opacity: 90%;
`;
const Relleno = styled.div`
  @media (max-width: 768px) {
    background-color: #9747ff;
    height: 30vh;
  }
`;

const Pruebas = () => {
  const [grupoNumber, setGrupoNumber] = useState([]);
  const [grupoNumber2, setGrupoNumber2] = useState([]);

  return (
    <>
      <Wrapper>
        <div className="containerColumn1">
          <FormularioWrapper2>
            <FormularioVectores
              grupoNumber={grupoNumber}
              setGrupoNumber={setGrupoNumber}
              num="1"
            ></FormularioVectores>
            <FormularioVectores 
            num="2"
            grupoNumber={grupoNumber2}
            setGrupoNumber={setGrupoNumber2}
            
            
            ></FormularioVectores>
          </FormularioWrapper2>
        </div>
        <div>
          <p>este es el otro div</p>
        </div>
      </Wrapper>
   
    </>
  );
};

export default Pruebas;
