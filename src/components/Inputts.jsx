
import { styled } from "styled-components";
const Inputts = ({funciones,calculo}) => {
  return (
    <div>
      <InputContainer>
        <Label></Label>
        <Input onChange={funciones}/>
      </InputContainer>
      <button onClick={calculo}></button>
    </div>
  );
};
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


export default Inputts;
