import { styled } from "styled-components";
import Lottieimg from "../components/Lottieimg";
import BotonesFiguras from "../components/BotonesFiguras";
import { useState } from "react";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

const Home = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [area, setArea] = useState("");

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
    localStorage.setItem("rectangleArea", area);
    setArea(area);
  };
  return (
    <Wrapper>
      <article>
        <BotonesFiguras calcs={calculateArea} />
        <Lottieimg
          funcionW={handleWidthChange}
          calculo={calculateArea}
          funcionH={handleHeightChange}
        />
        
      </article>
      <article>
        <p>{area}</p>
      </article>
    </Wrapper>
  );
};

export default Home;
