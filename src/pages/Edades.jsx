
import styled from 'styled-components';
import ColumnOne from '../components/ColumnOne';



const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Column = styled.div`
  background-color: rgb(50 63 148 / 90%);
  padding: 20px;
`;

const Edades = () => {
  return (
    <Wrapper>
      <ColumnOne />
      <Column >
       
      </Column>
    </Wrapper>
  );
};

export default Edades;
