import { styled } from "styled-components";
import Lottieimg from "../components/Lottieimg";
import BotonesFiguras from "../components/BotonesFiguras";
import BotonesEnlace from "../components/BotonesEnlace";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div>
        <BotonesFiguras/>
       
        <Lottieimg />
      </div>
    </Wrapper>
  );
};

export default Home;
