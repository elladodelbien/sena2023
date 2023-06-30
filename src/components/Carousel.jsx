import { useState } from "react";
import { styled } from "styled-components";




const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => { 
        if (prevIndex === 0) {
          return images.length - 1;
        } else {
          return prevIndex - 1;
        }
      });
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === images.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    };
  
    return (
      <CarouselContainer>
        <Button onClick={handlePrev}>&#8249;</Button>
        <Image src={images[currentIndex]} alt="" />
        <Button onClick={handleNext}>&#8250;</Button>
      </CarouselContainer>
    );
  };
  
  const CarouselContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
  `;
  
  const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
  `;
  
  const Button = styled.button`
    font-size: 24px;
    padding: 8px 12px;
    background-color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  `;
  
  const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    height: auto;
    margin: 10px;
    background-color: #575a6d80;
  
    .cuadrado {
      padding: 7px;
      display: flex;
      flex-direction: column;
  
      .img-rectangulo {
      }
  
      justify-content: center;
      img {
        width: 100%;
        @media (max-width: 768px) {
          height: auto;
        }
        height: 100px;
      }
    }
  `;

  export default Carousel